// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccountRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The display name of the member. This helps clarify the scenario in which the account is used.
   * 
   * @example
   * xxx project
   */
  childNick?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The permissions that can be granted to the member. Valid values:
   * 
   * *   SYNCHRONIZE_FINANCE_IDENTITY: allows the credit control identity to be shared with the member.
   * *   SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET: allows the discount policy to be shared with the member.
   * *   FORBID_WITHDRAW_CASH: does not allow the member to withdraw the balance.
   * *   FORBID_MANAGE_INVOICE: does not allow the member to manage invoices.
   * *   CHECK_FINANCE_INFO: requests to view information about the financial relationship.
   * *   MANAGE_TARGET_INVOICE: allows the member to manage invoices.
   * *   CHECK_TARGET_CONSUMPTION: allows the member to view the bills.
   * 
   * The params[PermissionCodes, RoleCodes] can not be null at the same time.
   * 
   * @example
   * CHECK_TARGET_CONSUMPTION
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise_group
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * This parameter is required.
   * 
   * @example
   * 32324242444
   */
  requestId?: string;
  /**
   * @remarks
   * The roles that can be assigned to the member. Set the value to trusteeship.
   * 
   * @example
   * trusteeship
   */
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationType: 'RelationType',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNick: 'string',
      childUserId: 'number',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationType: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: AddAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * Request ID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: AddAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAccountRelationResponseBody;
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
      body: AddAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the source cost center.
   * 
   * *   A value of 0 indicates that the resources to be transferred have not been allocated to a cost center.
   * *   A value greater than 0 indicates the ID of an existing cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  fromUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the source cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 273394581313325532
   */
  fromUnitUserId?: number;
  /**
   * @remarks
   * The resource instances to be transferred.
   * 
   * This parameter is required.
   */
  resourceInstanceList?: AllocateCostUnitResourceRequestResourceInstanceList[];
  /**
   * @remarks
   * The ID of the destination cost center.
   * 
   * *   A value of -1 indicates that the allocated resources are changed to unallocated.
   * *   A value greater than 0 indicates the ID of an existing cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 186419
   */
  toUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the destination cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 241021678450941490
   */
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      fromUnitId: 'FromUnitId',
      fromUnitUserId: 'FromUnitUserId',
      resourceInstanceList: 'ResourceInstanceList',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromUnitId: 'number',
      fromUnitUserId: 'number',
      resourceInstanceList: { 'type': 'array', 'itemType': AllocateCostUnitResourceRequestResourceInstanceList },
      toUnitId: 'number',
      toUnitUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: AllocateCostUnitResourceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 845C629F-47A7-4F46-A470-ED5047C4C250
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
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
      data: AllocateCostUnitResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateCostUnitResourceResponseBody;
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
      body: AllocateCostUnitResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the address to which the invoice is delivered. This parameter is required if the invoice is a paper invoice. Set the ID to the value of the AddressId parameter returned by calling the QueryCustomerAddressList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 237958367
   */
  addressId?: number;
  /**
   * @remarks
   * The nickname of the applicant. The system does not verify the nickname.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  applyUserNick?: string;
  /**
   * @remarks
   * The ID of the customer. Set the ID to the value of the CustomerId parameter returned by calling the QueryInvoicingCustomerList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 124132423
   */
  customerId?: number;
  /**
   * @remarks
   * The amount of the invoice. Unit: Cent.
   * 
   * This parameter is required.
   * 
   * @example
   * 124132
   */
  invoiceAmount?: number;
  /**
   * @remarks
   * Specifies whether to invoice by amount. A value of true indicates that the user applies for the invoice based on the InvoiceAmount parameter. A value of false indicates that the user applies for the invoice based on the total amount of the invoicing items.
   * 
   * @example
   * true
   */
  invoiceByAmount?: boolean;
  /**
   * @remarks
   * The type of the invoice. Valid values:
   * 
   * *   0: paper invoice
   * *   1: electronic invoice
   * 
   * @example
   * 1
   */
  invoicingType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The channel that is used to process the invoice. A value of 0 indicates that the invoice is processed by Alibaba Cloud. A value of 1 indicates that the invoice is processed by the tax platform. Set the value to 1.
   * 
   * @example
   * 1
   */
  processWay?: number;
  /**
   * @remarks
   * The IDs of the selected invoicing items. Set the IDs to the IDs returned by calling the QueryEvaluateList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 384752367
   */
  selectedIds?: number[];
  /**
   * @remarks
   * The remarks made by the user.
   * 
   * @example
   * test
   */
  userRemark?: string;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      applyUserNick: 'ApplyUserNick',
      customerId: 'CustomerId',
      invoiceAmount: 'InvoiceAmount',
      invoiceByAmount: 'InvoiceByAmount',
      invoicingType: 'InvoicingType',
      ownerId: 'OwnerId',
      processWay: 'ProcessWay',
      selectedIds: 'SelectedIds',
      userRemark: 'UserRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'number',
      applyUserNick: 'string',
      customerId: 'number',
      invoiceAmount: 'number',
      invoiceByAmount: 'boolean',
      invoicingType: 'number',
      ownerId: 'number',
      processWay: 'number',
      selectedIds: { 'type': 'array', 'itemType': 'number' },
      userRemark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ApplyInvoiceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: ApplyInvoiceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyInvoiceResponseBody;
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
      body: ApplyInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * 73465432785
   */
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CancelOrderResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30D2285E-A848-4ECB-AA74-4954C60858A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
      data: CancelOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderResponseBody;
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

export class ChangeResellerConsumeAmountRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the consumption amount adjustment. Valid values: increase: The consumption amount increases because new consumption occurs. decrease: The consumption amount decreases because funds are added to the account. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * increase/decrease
   */
  adjustType?: string;
  /**
   * @remarks
   * The amount to be adjusted. Unit: CNY
   * 
   * This parameter is required.
   * 
   * @example
   * 10.00
   */
  amount?: string;
  /**
   * @remarks
   * The type of the business.
   * 
   * This parameter is required.
   * 
   * @example
   * quota_amount_adjust
   */
  businessType?: string;
  /**
   * @remarks
   * The type of the currency.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The extended field of a message.
   * 
   * @example
   * {}
   */
  extendMap?: string;
  /**
   * @remarks
   * The ID of the primary key for external business. The ID is used for idempotence verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 1647396865
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  /**
   * @remarks
   * The source of the request. Specify the system name for the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      amount: 'Amount',
      businessType: 'BusinessType',
      currency: 'Currency',
      extendMap: 'ExtendMap',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'string',
      amount: 'string',
      businessType: 'string',
      currency: 'string',
      extendMap: 'string',
      outBizId: 'string',
      ownerId: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see the "Error codes" section of the topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The consumption quota for the quota ledger after adjustment.
   * 
   * @example
   * 300.00
   */
  data?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResellerConsumeAmountResponseBody;
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
      body: ChangeResellerConsumeAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The operation to be performed to confirm the invitation. Valid values:
   * 
   * *   child_agree: The member accepts the invitation.
   * *   child_disagree: The member rejects the invitation.
   * *   Canceled by the master account: The management account cancels the confirmation.
   * 
   * This parameter is required.
   * 
   * @example
   * child_agree
   */
  confirmCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The permissions that can be granted to the member. Valid values:
   * 
   * *   SYNCHRONIZE_FINANCE_IDENTITY: allows the credit control identity to be shared with the member.
   * *   SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET: allows the discount policy to be shared with the member.
   * *   FORBID_WITHDRAW_CASH: does not allow the member to withdraw the balance.
   * *   FORBID_MANAGE_INVOICE: does not allow the member to manage invoices.
   * *   CHECK_FINANCE_INFO: requests to view information about the financial relationship.
   * *   MANAGE_TARGET_INVOICE: allows the member to manage invoices.
   * *   CHECK_TARGET_CONSUMPTION: allows the member to view the bills.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNCHRONIZE_FINANCE_IDENTITY
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The ID of the financial relationship. Set this parameter to the value of the RelationId response parameter returned by calling the QueryRelationList operation.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * @example
   * Type of the financial relationship
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      confirmCode: 'ConfirmCode',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      confirmCode: 'string',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationId: 'number',
      relationType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ConfirmRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: ConfirmRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmRelationResponseBody;
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
      body: ConfirmRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-kasjgfjshgf
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. This parameter is required if you switch the billing method to subscription. Valid values:
   * 
   * *   1 to 9
   * *   12
   * *   24
   * *   36
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service to which the instance belongs.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * >  After the call is successful, the billing method of the instance is switched.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      period: 'Period',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      period: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ConvertChargeTypeResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: ConvertChargeTypeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertChargeTypeResponseBody;
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
      body: ConvertChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The attribute of the account. To view the attribute of the account, use the account to log on to the Alibaba Cloud Management Console, move the pointer over the profile picture in the upper-right corner, and then click **Security Settings**.
   * 
   * @example
   * 1
   */
  accountAttr?: string;
  /**
   * @remarks
   * The name of the city.
   * 
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @remarks
   * The name of the enterprise.
   * 
   * @example
   * Dongguan ChuangNeng Electric Appliance Co., Ltd
   */
  enterpriseName?: string;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * Zhicheng
   */
  firstName?: string;
  /**
   * @remarks
   * The last name.
   * 
   * The last name can be up to 64 characters in length.
   * 
   * @example
   * Wu
   */
  lastName?: string;
  /**
   * @remarks
   * The email address used to log on to the account.
   * 
   * This parameter is required.
   * 
   * @example
   * email
   */
  loginEmail?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  nationCode?: string;
  /**
   * @remarks
   * The zip code.
   * 
   * @example
   * 350000
   */
  postcode?: string;
  /**
   * @remarks
   * The name of the province. This parameter is optional.
   * 
   * @example
   * Beijing
   */
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttr: 'AccountAttr',
      cityName: 'CityName',
      enterpriseName: 'EnterpriseName',
      firstName: 'FirstName',
      lastName: 'LastName',
      loginEmail: 'LoginEmail',
      nationCode: 'NationCode',
      postcode: 'Postcode',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttr: 'string',
      cityName: 'string',
      enterpriseName: 'string',
      firstName: 'string',
      lastName: 'string',
      loginEmail: 'string',
      nationCode: 'string',
      postcode: 'string',
      provinceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The relationship between the account that is used to call the CreateAgAccount operation and the account that is created.
   */
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * LOGIN_EMAIL_HAS_BEEN_USED
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * loginEmail=685741089H@chinaunicom.cn,has used
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: CreateAgAccountResponseBodyAgRelationDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAgAccountResponseBody;
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
      body: CreateAgAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequest extends $tea.Model {
  /**
   * @remarks
   * The list of cost centers.
   */
  unitEntityList?: CreateCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': CreateCostUnitRequestUnitEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
      data: CreateCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCostUnitResponseBody;
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
      body: CreateCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The server checks whether a request that uses the same client token has been received. If a request that uses the same client token has been received, the server returns the same request result as the previous request.
   * 
   * @example
   * JASIOFKVNVIXXXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The logistics address of this order. This parameter is generally valid for physical orders.
   * 
   * @example
   * {"cityCode":"330100","cityName":"Hangzhou","contactName":"Test","countryCode":"","districtName":"Puyan Street","email":"\\*\\*@example.com","mobilePhone":"153564848844","phone":"1234567","provCode":"330000","provName":"Zhejiang","streetCode":"33010610","streetName":"Zhuantang","zipCode":"0000"}
   */
  logistics?: string;
  ownerId?: number;
  /**
   * @remarks
   * The details of the modules.
   */
  parameter?: CreateInstanceRequestParameter[];
  /**
   * @remarks
   * The subscription duration. Unit: month. The value must be an integral multiple of 12.
   * 
   * >  This parameter is required if you create a subscription instance.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud Services**.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The auto-renewal period. Unit: month.
   * 
   * >  This parameter is required if the **RenewalStatus** parameter is set to **AutoRenewal**.
   * 
   * @example
   * 12
   */
  renewPeriod?: number;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * 
   * Default value: ManualRenewal.
   * 
   * @example
   * ManualRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logistics: 'Logistics',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      period: 'Period',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logistics: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
      period: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
      renewalStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C880B065-A781-4F19-B6DD-3E0E3B715C64
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: CreateInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 7ed0bedc-056e-4a71-9249-4581615c028f
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class CreateResellerUserQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResellerUserQuotaResponseBody;
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
      body: CreateResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageRequest extends $tea.Model {
  /**
   * @remarks
   * The validity period of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the resource plan takes effect. If you leave this parameter empty, the resource plan immediately takes effect by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-03-03T12:00:00Z
   */
  effectiveDate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the resource plan. Set this parameter to the code of the **resource plan** returned by calling the **DescribeResourcePackageProduct** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_sh
   */
  packageType?: string;
  /**
   * @remarks
   * The unit of the validity period of the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The code of the service. You can query the code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud services**.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The specifications of the resource plan. Set this parameter to the value of the **specifications** returned by calling the **DescribeResourcePackageProduct** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateResourcePackageResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202407022550621
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourcePackageResponseBody;
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
      body: CreateResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * savingplan_common_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The service duration. This parameter is used together with the PricingCycle parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The time when the savings plan takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-31T00:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The extended parameters.
   * 
   * **if can be null:**
   * true
   */
  extendMap?: { [key: string]: string };
  /**
   * @remarks
   * The payment mode. Valid values:
   * 
   * *   total: all upfront
   * *   half: partial upfront
   * *   zero: no upfront
   * 
   * This parameter is required.
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The contracted amount. unit: CNY
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1
   */
  poolValue?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is used together with Duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region in which you create the savings plan. You must specify this parameter if the Type parameter is not set to universal.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The specification type. This parameter is used together with the Specification parameter. You must specify this parameter if the Type parameter is not set to universal. Valid values:
   * 
   * *   group: specification group
   * *   family: specification family
   * 
   * @example
   * family
   */
  specType?: string;
  /**
   * @remarks
   * The specifications of the savings plan. This parameter is used together with the SpecType parameter.
   * 
   * @example
   * ecs.g6
   */
  specification?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose type
   * *   ecs: Elastic Compute Service (ECS) compute type
   * *   elasticy: elastic type
   * 
   * This parameter is required.
   * 
   * @example
   * universal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      extendMap: 'ExtendMap',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      specType: 'SpecType',
      specification: 'Specification',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      duration: 'string',
      effectiveDate: 'string',
      extendMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payMode: 'string',
      poolValue: 'string',
      pricingCycle: 'string',
      region: 'string',
      specType: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * savingplan_common_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The service duration. This parameter is used together with the PricingCycle parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The time when the savings plan takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-31T00:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The extended parameters.
   * 
   * **if can be null:**
   * true
   */
  extendMapShrink?: string;
  /**
   * @remarks
   * The payment mode. Valid values:
   * 
   * *   total: all upfront
   * *   half: partial upfront
   * *   zero: no upfront
   * 
   * This parameter is required.
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The contracted amount. unit: CNY
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1
   */
  poolValue?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is used together with Duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region in which you create the savings plan. You must specify this parameter if the Type parameter is not set to universal.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The specification type. This parameter is used together with the Specification parameter. You must specify this parameter if the Type parameter is not set to universal. Valid values:
   * 
   * *   group: specification group
   * *   family: specification family
   * 
   * @example
   * family
   */
  specType?: string;
  /**
   * @remarks
   * The specifications of the savings plan. This parameter is used together with the SpecType parameter.
   * 
   * @example
   * ecs.g6
   */
  specification?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose type
   * *   ecs: Elastic Compute Service (ECS) compute type
   * *   elasticy: elastic type
   * 
   * This parameter is required.
   * 
   * @example
   * universal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      extendMapShrink: 'ExtendMap',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      specType: 'SpecType',
      specification: 'Specification',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      duration: 'string',
      effectiveDate: 'string',
      extendMapShrink: 'string',
      payMode: 'string',
      poolValue: 'string',
      pricingCycle: 'string',
      region: 'string',
      specType: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateSavingsPlansInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The parameter must be specified.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 26dabb0c-8ca0-4aa0-8143-30499f3fe304
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: CreateSavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSavingsPlansInstanceResponseBody;
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
      body: CreateSavingsPlansInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitRequest extends $tea.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 2135342
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 376348
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: DeleteCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCostUnitResponseBody;
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
      body: DeleteCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the budget. Fuzzy match is supported.
   * 
   * @example
   * Annual budget
   */
  budgetName?: string;
  /**
   * @remarks
   * The status of the budget. Valid values: overdue and notOverdue. A value of overdue specifies to filter expired budgets. A value of notOverdue specifies to filter budgets that do not expire. By default, if you do not specify this parameter, information about all budgets is to be returned.
   * 
   * @example
   * notOverdue
   */
  budgetStatus?: string;
  /**
   * @remarks
   * The type of the budget. Valid values: cost, byquantity, and asset. A value of cost specifies to filter expense budgets. A value of byquantity specifies to filter budgets calculated based on the resource usage. A value of asset specifies to filter usage or coverage budgets. By default, information about all budgets is returned if you do not specify this parameter.
   * 
   * @example
   * cost
   */
  budgetType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The position in which the query starts. You must set this parameter to null or the token that is obtained from the previous query. Otherwise, an error is returned. If you set the NextToken parameter to null, the query starts from the beginning. The default value is null.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeCostBudgetsSummaryResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BFC23FE-A182-4D96-A1E4-7521B30B8E43
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: DescribeCostBudgetsSummaryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCostBudgetsSummaryResponseBody;
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
      body: DescribeCostBudgetsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member to which the bill belongs. The member ID is used to filter bills. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account and all members of the current account are queried. You can specify a maximum of 10 IDs.
   */
  billOwnerIdList?: string[];
  /**
   * @remarks
   * The ID of the member that needs to settle the bill. The member ID is used to filter bills. If you specify a value for this parameter, you can query the bills of the specified member account. If you leave this parameter empty, the bills of the current account and all members of the current account are queried by default. You can specify a maximum of 10 IDs.
   */
  billUserIdList?: string[];
  /**
   * @remarks
   * The allocation month. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing cycle that is used to filter bills. You can specify a maximum of 10 billing cycles.
   */
  consumePeriodFilter?: string[];
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * 123#
   */
  costUnitCode?: string;
  /**
   * @remarks
   * The instance ID that is used to filter bills. You can specify multiple instance IDs to query bills of multiple instances. If you leave this parameter empty, the bills of all instances are queried by default. You can specify a maximum of 10 instance IDs.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the query starts. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The code of the service. You can obtain the value of this parameter by calling the QueryProductList operation or the DescribeResourcePackageProduct operation.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The specific service resource.
   * 
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      consumePeriodFilter: 'ConsumePeriodFilter',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      consumePeriodFilter: { 'type': 'array', 'itemType': 'string' },
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody;
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
      body: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-10
   */
  amortizationDateEnd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-10
   */
  amortizationDateStart?: string;
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @example
   * 2023-05
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  instanceIdList?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationDateEnd: 'AmortizationDateEnd',
      amortizationDateStart: 'AmortizationDateStart',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationDateEnd: 'string',
      amortizationDateStart: 'string',
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody;
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
      body: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodRequest extends $tea.Model {
  amortizationPeriodFilter?: string[];
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  instanceIdList?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriodFilter: 'AmortizationPeriodFilter',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriodFilter: { 'type': 'array', 'itemType': 'string' },
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAmortizedCostByConsumePeriodResponseBody;
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
      body: DescribeInstanceAmortizedCostByConsumePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify this parameter, the bills of the member are queried. If you do not specify this parameter, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Specify the parameter in the YYYY-MM format.
   * Only the latest 18 month billing cycle is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only when the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-02
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills on a monthly basis. The data that you query is the same as the data searched by instances on the Billing Details tab of the Bill Details page in the User Center console.
   * *   DAILY: queries bills on a daily basis. The data that you query is the same as the data searched by days on the Billing Details tab of the Bill Details page in the User Center console.
   * 
   * The BillingDate parameter is required if you set the Granularity parameter to DAILY.
   * 
   * @example
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * abc
   */
  instanceID?: string;
  /**
   * @remarks
   * Specifies whether to query data by billable items. Valid values:
   * 
   * *   false: The data that you query is the same as the data searched by instances on the Billing Details tab of the Bill Details page in the User Center console.
   * *   true: The data that you query is the same as the data searched by billable items on the Billing Details tab of the Bill Details page in the User Center console.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isBillingItem?: boolean;
  /**
   * @remarks
   * Specifies whether to filter bills if both the pretax gross amount and pretax amount are 0. Valid values:
   * 
   * *   false: does not filter bills.
   * *   true: filters bills.
   * 
   * @example
   * false
   */
  isHideZeroCharge?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to indicate the position where the results for the current call start. The parameter must be left empty or set to the value of the NextToken parameter that is returned from the last call. Otherwise, an error is returned. If the parameter is left empty, data is queried from the first item.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      instanceID: 'InstanceID',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pipCode: 'PipCode',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      instanceID: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      pipCode: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeInstanceBillResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeInstanceBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceBillResponseBody;
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
      body: DescribeInstanceBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest extends $tea.Model {
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @example
   * 2023-04
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  instanceIdList?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBody;
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
      body: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The service code. You can query the service code by calling the **QueryProductList** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. You can query the service type by calling the **QueryProductList** operation.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribePricingModuleResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C40A8EE0-8084-49FE-B66E-5E1C3B6AE025
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: DescribePricingModuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePricingModuleResponseBody;
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
      body: DescribePricingModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID that is used to filter bills. You can specify multiple instance IDs to query bills of multiple instances. If you leave this parameter empty, the bills of all instances are queried by default. You can specify a maximum of 10 instance IDs.
   */
  billOwnerIdList?: string[];
  /**
   * @remarks
   * The ID of the member that needs to settle the bill. The member ID is used to filter bills. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account and all members of the current account are queried by default. You can specify a maximum of 10 IDs.
   */
  billUserIdList?: string[];
  /**
   * @remarks
   * The allocation month. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing cycle that is used to filter bills. You can specify a maximum of 10 billing cycles.
   */
  consumePeriodFilter?: string[];
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * 123#
   */
  costUnitCode?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the query starts. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The code of the service. You can obtain the value of this parameter by calling the QueryProductList operation or the DescribeResourcePackageProduct operation.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The specific service resource.
   * 
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      consumePeriodFilter: 'ConsumePeriodFilter',
      costUnitCode: 'CostUnitCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      consumePeriodFilter: { 'type': 'array', 'itemType': 'string' },
      costUnitCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductAmortizedCostByAmortizationPeriodResponseBody;
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
      body: DescribeProductAmortizedCostByAmortizationPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodRequest extends $tea.Model {
  amortizationPeriodFilter?: string[];
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriodFilter: 'AmortizationPeriodFilter',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriodFilter: { 'type': 'array', 'itemType': 'string' },
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeProductAmortizedCostByConsumePeriodResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: DescribeProductAmortizedCostByConsumePeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductAmortizedCostByConsumePeriodResponseBody;
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
      body: DescribeProductAmortizedCostByConsumePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query coverage details. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to set this parameter if you query coverage details within a specific time range for the first time. The response returns a token that you can use to query coverage details that are displayed on the next page. If a null value is returned for the NextToken parameter, no more coverage details can be queried.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The time granularity at which coverage details are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The type of deduction plans whose coverage details are queried. Valid values: RI and SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * RI
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeResourceCoverageDetailResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeResourceCoverageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceCoverageDetailResponseBody;
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
      body: DescribeResourceCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query total coverage data. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which total coverage data is queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The type of deduction plans whose total coverage data is queried. Valid values: RI and SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * RI
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeResourceCoverageTotalResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeResourceCoverageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceCoverageTotalResponseBody;
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
      body: DescribeResourceCoverageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeResourcePackageProductResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 72353765387
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeResourcePackageProductResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourcePackageProductResponseBody;
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
      body: DescribeResourcePackageProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account whose data you want to query. If you do not specify this parameter, the data of the current Alibaba Cloud account and its Resource Access Management (RAM) users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. The maximum value is 300.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If NextToken is empty, no next page exists.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The time granularity at which usage details are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The type of deduction plan whose usage details are queried. Valid values: RI and SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * RI
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeResourceUsageDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeResourceUsageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceUsageDetailResponseBody;
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
      body: DescribeResourceUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account whose data you want to query. If you do not specify this parameter, the data of the current account and its linked accounts is queried. To query the data of a linked account, specify the ID of the linked account. You can specify only one account ID.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format. The specified time is excluded from the time range. If you do not specify this parameter, this parameter is set to the current time.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which the data is queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The type of the resource plan. Valid values: RI and SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * RI
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format. The specified time is included in the time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The queried data.
   */
  data?: DescribeResourceUsageTotalResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 364C7C81-5E5E-51A0-B738-1969D2671B05
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
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
      data: DescribeResourceUsageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceUsageTotalResponseBody;
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
      body: DescribeResourceUsageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query coverage details.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-08-09 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @remarks
   * The time granularity at which coverage details are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-15 13:40:45
   */
  startPeriod?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to set this parameter if you query coverage details within a specific time range for the first time. The response returns a token that you can use to query coverage details that are displayed on the next page. If a null value is returned for the NextToken parameter, no more coverage details can be queried.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansCoverageDetailResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeSavingsPlansCoverageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSavingsPlansCoverageDetailResponseBody;
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
      body: DescribeSavingsPlansCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query coverage summary. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-07-20 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which coverage summary are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-15 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansCoverageTotalResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeSavingsPlansCoverageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSavingsPlansCoverageTotalResponseBody;
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
      body: DescribeSavingsPlansCoverageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query usage details. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @remarks
   * The time granularity at which usage details are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to set this parameter if you query usage details within a specific time range for the first time. The response returns a token that you can use to query usage details that are displayed on the next page. If a null value is returned for the NextToken parameter, no more coverage details can be queried.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansUsageDetailResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeSavingsPlansUsageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSavingsPlansUsageDetailResponseBody;
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
      body: DescribeSavingsPlansUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query usage summary. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which usage summary are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansUsageTotalResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeSavingsPlansUsageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSavingsPlansUsageTotalResponseBody;
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
      body: DescribeSavingsPlansUsageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify this parameter, the bills of the member are queried. If you do not specify this parameter, the bills of the current account are queried by default.
   * 
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Specify the parameter in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only when the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-02
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills on a monthly basis. The data that you query is the same as the data that is queried by billing cycles in the Split Bill module of the User Center console.
   * *   DAILY: queries bills on a daily basis. The data that you query is the same as the data that is queried by days in the Split Bill module of the User Center console.
   * 
   * If you specify DAILY for this parameter, the BillingDate parameter is required.
   * 
   * @example
   * Monthly
   */
  granularity?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @remarks
   * Specifies whether to filter bills if both the pretax gross amount and pretax amount are 0. Valid values:
   * 
   * *   false: does not filter bills.
   * *   true: filters bills.
   * 
   * @example
   * false
   */
  isHideZeroCharge?: boolean;
  /**
   * @remarks
   * The maximum number of entries to query. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. The parameter must be left empty or set to the value of the NextToken parameter returned in the last call. Otherwise, an error is returned. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * CAESEgoQCg4KCmd
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the split item.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  splitItemID?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: the subscription billing method. PayAsYouGo: the pay-as-you-go billing method. This parameter must be used with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tags that are used to filter split bills. You can specify multiple tag values. If you specify multiple tag values, split bills that match one of the tag values are queried.
   */
  tagFilter?: DescribeSplitItemBillRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      instanceID: 'InstanceID',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pipCode: 'PipCode',
      productCode: 'ProductCode',
      productType: 'ProductType',
      splitItemID: 'SplitItemID',
      subscriptionType: 'SubscriptionType',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      instanceID: 'string',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      pipCode: 'string',
      productCode: 'string',
      productType: 'string',
      splitItemID: 'string',
      subscriptionType: 'string',
      tagFilter: { 'type': 'array', 'itemType': DescribeSplitItemBillRequestTagFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSplitItemBillResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: DescribeSplitItemBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSplitItemBillResponseBody;
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
      body: DescribeSplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the financial relationship. Value returned by calling the AddAccountRelation operation.
   * 
   * @example
   * 1234
   */
  relationId?: number;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * @example
   * requestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: GetAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * RequestId
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
      data: GetAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountRelationResponseBody;
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
      body: GetAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCustomerAccountInfoResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94017C56-1725-5DD9-AB41-B3BAE791D600
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
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
      data: GetCustomerAccountInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerAccountInfoResponseBody;
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
      body: GetCustomerAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCustomerListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call failed.
   * 
   * @example
   * true
   */
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

export class GetOrderDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * 32453453
   */
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetOrderDetailResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: GetOrderDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrderDetailResponseBody;
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
      body: GetOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequest extends $tea.Model {
  /**
   * @remarks
   * The details of pricing modules.
   * 
   * This parameter is required.
   */
  moduleList?: GetPayAsYouGoPriceRequestModuleList[];
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The billing method. Set the value to PayAsYouGo.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: { 'type': 'array', 'itemType': GetPayAsYouGoPriceRequestModuleList },
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetPayAsYouGoPriceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1537A007-72D7-4165-8A26-8694A38E219A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: GetPayAsYouGoPriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPayAsYouGoPriceResponseBody;
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
      body: GetPayAsYouGoPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceRequest extends $tea.Model {
  /**
   * @remarks
   * The validity period of the resource plan. The value must be the same as the duration of the resource plan specified in the specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the resource plan takes effect. If you do not specify this parameter, the resource plan immediately takes effect by default. 
   * When the **OrderType** is **BUY**, resource packs with the **EffectiveDate longer than the current time of 6 months** are not supported. 
   * If the **OrderType** is **UPGRADE**, the **EffectiveDate** **must be less than or equal to** the actual expiration time of the upgraded instance.
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-10T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the instance. **This parameter is required when the order type is renewal or upgrade.**
   * 
   * @example
   * OSSBAG-cn-0xl0002
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   BUY: You place the order to purchase an instance.
   * *   UPGRADE: You place the order to upgrade an instance.
   * *   RENEW: You place the order to renew an instance.
   * 
   * Default value: BUY.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the resource plan. The value must be the same as the value of the **ProductCode** parameter that is returned when you call the **DescribeResourcePackageProduct** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * FPT_ossbag_periodMonthlyAcc_NetworkOut_finance_common
   */
  packageType?: string;
  /**
   * @remarks
   * The unit of validity period of the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The code of service. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud Services**.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The specifications of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetResourcePackagePriceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: GetResourcePackagePriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcePackagePriceResponseBody;
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
      body: GetResourcePackagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance for which the price is queried. This parameter is required if you upgrade an instance. You can specify this parameter to obtain the pre-upgrade configurations of the instance.
   * 
   * @example
   * i-khkjhxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the pricing module.
   * 
   * This parameter is required.
   */
  moduleList?: GetSubscriptionPriceRequestModuleList[];
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   NewOrder: purchases an instance of an Alibaba Cloud service.
   * *   Renewal: renews an instance of an Alibaba Cloud service.
   * *   Upgrade: upgrades an instance of an Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * NewOrder
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. For more information about the service code, see **Codes of Alibaba Cloud Services**.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. Specify the parameter based on the pricing document of the specific service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The service duration.
   * 
   * @example
   * 1
   */
  servicePeriodQuantity?: number;
  /**
   * @remarks
   * The unit of the service duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * @example
   * Year
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The billing method. Set the value to Subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleList: 'ModuleList',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      servicePeriodQuantity: 'ServicePeriodQuantity',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleList: { 'type': 'array', 'itemType': GetSubscriptionPriceRequestModuleList },
      orderType: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      quantity: 'number',
      region: 'string',
      servicePeriodQuantity: 'number',
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * InvalidConfigCod
   */
  code?: string;
  /**
   * @remarks
   * The information about the service price.
   */
  data?: GetSubscriptionPriceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30E7066E-AE6F-4E59-AFE6-11386CE3AFA7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: GetSubscriptionPriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubscriptionPriceResponseBody;
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
      body: GetSubscriptionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required for scenarios that need idempotence. The UUID that is used to ensure the idempotence of the request.
   * 
   * @example
   * 793F021C-B589-1225-82A9-99232AEBE494
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required for unsubscription scenarios.
   * 
   * @example
   * i-bp1etb69sqxgl4*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the service. This parameter is required for unsubscription scenarios.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. This parameter is required for unsubscription scenarios. Unless otherwise specified, set this parameter to an empty string.
   * 
   * @example
   * ”“
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: InquiryPriceRefundInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
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
      data: InquiryPriceRefundInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InquiryPriceRefundInstanceResponseBody;
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
      body: InquiryPriceRefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The display name of the member. This helps clarify the scenario in which the account is used.
   * 
   * @example
   * Display name of the member
   */
  childNick?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The permissions that can be modified. Valid values:
   * 
   * *   SYNCHRONIZE_FINANCE_IDENTITY: allows the credit control identity to be shared with the member.
   * *   SYNCHRONIZE_FINANCE_DISCOUNT_POLICY_TO_TARGET: allows the discount policy to be shared with the member.
   * *   FORBID_WITHDRAW_CASH: does not allow the member to withdraw the balance.
   * *   FORBID_MANAGE_INVOICE: does not allow the member to manage invoices.
   * *   CHECK_FINANCE_INFO: requests to view information about the financial relationship.
   * *   MANAGE_TARGET_INVOICE: allows the member to manage invoices.
   * *   CHECK_TARGET_CONSUMPTION: allows the member to view the bills.
   * 
   * @example
   * SYNCHRONIZE_FINANCE_IDENTITY
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * The ID of the financial relationship. Set this parameter to the value of the relationId response parameter returned by calling the QueryRelationList operation.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The operation to be performed. Valid values:
   * 
   * *   ADD
   * *   DELETE
   * 
   * This parameter is required.
   * 
   * @example
   * ADD
   */
  relationOperation?: string;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * @example
   * enterprise_group
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * This parameter is required.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  /**
   * @remarks
   * The roles that can be assigned to the member. You cannot modify the roles.
   * 
   * @example
   * trusteeship
   */
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationId: 'RelationId',
      relationOperation: 'RelationOperation',
      relationType: 'RelationType',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNick: 'string',
      childUserId: 'number',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationId: 'number',
      relationOperation: 'string',
      relationType: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: ModifyAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountRelationResponseBody;
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
      body: ModifyAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitRequest extends $tea.Model {
  /**
   * @remarks
   * The cost centers to be modified.
   */
  unitEntityList?: ModifyCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': ModifyCostUnitRequestUnitEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyCostUnitResponseBodyData[];
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ModifyCostUnitResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCostUnitResponseBody;
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
      body: ModifyCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * @example
   * JAKSJFHFAKJSF
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to modify the configurations.
   * 
   * @example
   * rm-akjhkdsjhfskjfhd
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of configuration modifications. Valid values:
   * 
   * *   Upgrade: upgrades the configurations of the instance.
   * *   Downgrade: downgrades the configurations of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The details about the parameters.
   */
  parameter?: ModifyInstanceRequestParameter[];
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service to which the instance belongs.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      modifyType: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': ModifyInstanceRequestParameter },
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: ModifyInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceResponseBody;
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
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountBalanceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16176743-6DC7-4CB3-BB25-A13982D8DFAD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryAccountBalanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccountBalanceResponseBody;
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
      body: QueryAccountBalanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2021-06-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills by month. The data queried is consistent with the data that is displayed for the specified billing cycle on the Billing Details tab of the Bill Details page in User Center.
   * *   DAILY: queries bills by day. The data queried is consistent with the data that is displayed for the specified day on the Billing Details tab of the Bill Details page in User Center.
   * 
   * You must set the BillingDate parameter before you can set the Granularity parameter to DAILY.
   * 
   * @example
   * Monthly
   */
  granularity?: string;
  /**
   * @remarks
   * Specifies whether to summarize bills based on service codes. Valid values:
   * 
   * *   true: summarizes bills based on service codes.
   * *   false: does not summarize bills based on service codes.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isGroupByProduct?: boolean;
  ownerID?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isGroupByProduct: 'IsGroupByProduct',
      ownerID: 'OwnerID',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isGroupByProduct: 'boolean',
      ownerID: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountBillResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BFC23FE-A182-4D96-A1E4-7521B30B8E43
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryAccountBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccountBillResponseBody;
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
      body: QueryAccountBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the creation time range to query.
   * 
   * @example
   * 2022-12-20
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the creation time range to query.
   * 
   * @example
   * 2022-01-20
   */
  createTimeStart?: string;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for paging.
   * 
   * @example
   * ABEDSDS124DASA
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 2022120336190912
   */
  recordID?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 2022112122001470591458665933
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 410874027490089
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The type of the transaction.
   * 
   * @example
   * CHARGE
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      maxResults: 'number',
      nextToken: 'string',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionNumber: 'string',
      transactionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountTransactionDetailsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * asadadad-edafafafaasd
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryAccountTransactionDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccountTransactionDetailsResponseBody;
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
      body: QueryAccountTransactionDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the creation time range to query. By default, the transactions in the last month are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-01-01T00:00:00Z.
   * 
   * @example
   * 2020-03-06T01:55:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the creation time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-01-01T00:00:00Z.
   * 
   * @example
   * 2020-03-05T01:46:09Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The number of the page to return. Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 20200302
   */
  recordID?: string;
  /**
   * @remarks
   * The transaction channel. If you specify one of the following transaction channels for this parameter, the results for the specified transaction channel are returned. If the transaction channel that you specify does not belong to the following transaction channels, no result is returned. If you leave this parameter empty, the results for all the following transaction channels are returned by default. Valid values:
   * 
   * *   AccountBalance
   * *   BankTransfer
   * *   Alipay
   * *   AntCreditPay
   * *   OfflineRemittance
   * *   RegularBankCreditRefund
   * *   CreditCard
   * *   MyBankCredit
   * *   HuaxiaBankCInstallment
   * *   ApplePay
   * 
   * @example
   * AccountBalance
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 12342134
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The type of the transaction flow. If you specify one of the following types for this parameter, the results for the specified type are returned. If the type that you specify does not belong to the following types, no result is returned. If you leave this parameter empty, the results for the following two types are returned by default. Valid values:
   * 
   * *   Income
   * *   Expense
   * 
   * @example
   * Income
   */
  transactionFlow?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 133314076
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The type of the transaction. If you specify one of the following transaction types for this parameter, the results for the specified transaction type are returned. If the transaction type that you specify does not belong to the following types, no result is returned. If you leave this parameter empty, the results for all the following transaction types are returned by default. Valid values:
   * 
   * *   Payment
   * *   Withdraw
   * *   Refund
   * *   Consumption
   * *   Transfer
   * *   Adjust
   * 
   * @example
   * Payment
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountTransactionsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8634E02D-0942-4B1D-8295-5352FE9A1F39
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryAccountTransactionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAccountTransactionsResponseBody;
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
      body: QueryAccountTransactionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The end time when the specified instance is created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time when the specified instance is created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  endTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  endTimeStart?: string;
  /**
   * @remarks
   * The ID of the instance. Separate multiple IDs with commas (,). You can specify a maximum of 100 IDs.
   * 
   * @example
   * rm-xxxxxxxxxxxx
   */
  instanceIDs?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud services**.
   * 
   * >This parameter cannot be left empty if the region is specified.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The renewal status of the specified instance. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      endTimeEnd: 'EndTimeEnd',
      endTimeStart: 'EndTimeStart',
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      endTimeEnd: 'string',
      endTimeStart: 'string',
      instanceIDs: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAvailableInstancesResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7C15585-8349-4C62-BEE4-5A391841B9BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryAvailableInstancesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvailableInstancesResponseBody;
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
      body: QueryAvailableInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @remarks
   * Specifies whether to display local currency information in bills. The parameter will be discontinued.
   * 
   * @example
   * false
   */
  isDisplayLocalCurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to filter out a bill whose pretax gross amount is 0. By default, a bill whose pretax gross amount is 0 is not filtered out. Valid values:
   * 
   * *   true: filters out a bill whose pretax gross amount is 0.
   * *   false: does not filter out a bill whose pretax gross amount is 0.
   * 
   * @example
   * true
   */
  isHideZeroCharge?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * 
   * This parameter must be used together with the ProductCode parameter.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The type of the bill. Valid values:
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * SubscriptionOrder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      isDisplayLocalCurrency: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryBillResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AE3F4057-DFC9-4B81-8858-F620651010C9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBillResponseBody;
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
      body: QueryBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account are queried by default.
   * 
   * @example
   * 1234
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryBillOverviewResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCB1E1BC-05BF-4217-80EE-BF09A29407BA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryBillOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBillOverviewResponseBody;
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
      body: QueryBillOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryBillToOSSSubscriptionResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EEAE43F-1E4D-4734-AE93-5049878AC103
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryBillToOSSSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryBillToOSSSubscriptionResponseBody;
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
      body: QueryBillToOSSSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the voucher takes effect. Valid values:
   * 
   * *   true: The voucher takes effect.
   * *   false: The voucher does not take effect.
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end time of the validity period of the voucher. Specify the parameter in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-08-01T00:00:00Z.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start time of the validity period of the voucher. Specify the parameter in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-08-01T00:00:00Z.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCashCouponsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 147B566E-DB4C-4E43-BDBB-5DB1D9D268DB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryCashCouponsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCashCouponsResponseBody;
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
      body: QueryCashCouponsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListRequest extends $tea.Model {
  lang?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * NotApplicable
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCommodityListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CC706AAC-75A6-55B5-9AB7-7D171C6C7655
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the information about the service was queried.
   * 
   * @example
   * True
   */
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
      data: QueryCommodityListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCommodityListResponseBody;
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
      body: QueryCommodityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitRequest extends $tea.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 28394563429587
   */
  ownerUid?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. A maximum of 300 entries can be returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentUnitId: 'ParentUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentUnitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCostUnitResponseBody;
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
      body: QueryCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 23453245
   */
  ownerUid?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 235325
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCostUnitResourceResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04332CB7-9A57-4461-97E0-02821D044414
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryCostUnitResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCostUnitResourceResponseBody;
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
      body: QueryCostUnitResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCustomerAddressListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryCustomerAddressListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomerAddressListResponseBody;
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
      body: QueryCustomerAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the resource, such as ecsRi and scu_bag. If this parameter is specified, the ProdCode parameter does not take effect for the request.
   * 
   * @example
   * ecsRi
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the deducted instance. If this parameter is not specified, the details of all instances are returned.
   * 
   * @example
   * oss-123123
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query the resource plan usage of linked accounts. Valid values:
   * 
   * *   true: queries the resource plan usage of linked accounts.
   * *   false: does not query the resource plan usage of linked accounts.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  includeShare?: boolean;
  /**
   * @remarks
   * The ID of the instance to query. If this parameter is not specified, the details of all used instances are returned.
   * 
   * @example
   * oss-123123
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * Instancetyp
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. For the first query, set the value to null. For subsequent queries, set the value to the token that is obtained from the NextToken parameter.
   * 
   * @example
   * CAESF***zNTAw
   */
  lastToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The code of the service. Example: ecs.
   * 
   * @example
   * oss
   */
  prodCode?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      includeShare: 'IncludeShare',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      lastToken: 'LastToken',
      limit: 'Limit',
      prodCode: 'ProdCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deductedInstanceId: 'string',
      endTime: 'string',
      includeShare: 'boolean',
      instanceId: 'string',
      instanceSpec: 'string',
      lastToken: 'string',
      limit: 'number',
      prodCode: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryDPUtilizationDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryDPUtilizationDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDPUtilizationDetailResponseBody;
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
      body: QueryDPUtilizationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListRequest extends $tea.Model {
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 202003
   */
  billCycle?: string;
  /**
   * @remarks
   * The market types in invoices.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all market types are queried.
   * 
   * @example
   * ALIYUN
   */
  bizTypeList?: string[];
  /**
   * @remarks
   * The maximum amount to be queried.
   * 
   * @example
   * 1000
   */
  endAmount?: number;
  /**
   * @remarks
   * The latest time when an order is paid Specify the time in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2020-02-02 15:00:00
   */
  endBizTime?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-03-02 12:00:00
   */
  endSearchTime?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * @example
   * 2387432832696
   */
  outBizId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the sort. Valid values:
   * 
   * *   1: Sort invoices by ID in descending order.
   * *   2: Sort invoices by invoice type in descending order, and then sort invoices of the same type by ID in descending order.
   * *   3: Sort invoices by invoice type in ascending order, and then sort invoices of the same type by ID in descending order.
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * The minimum amount to be queried.
   * 
   * @example
   * 100
   */
  startAmount?: number;
  /**
   * @remarks
   * The earliest time when an order is paid. Specify the time in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2020-02-02 12:00:00
   */
  startBizTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-02-02 12:00:00
   */
  startSearchTime?: string;
  /**
   * @remarks
   * The type of orders to be queried. Valid values:
   * 
   * *   1: the orders in which the invoiceable amount is negative.
   * *   2: the orders in which the invoiceable amount is positive.
   * *   3: the orders in which the invoiceable amount is not 0.
   * *   4: the orders in which the amount that has been invoiced is greater than 0.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all orders are queried.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      bizTypeList: 'BizTypeList',
      endAmount: 'EndAmount',
      endBizTime: 'EndBizTime',
      endSearchTime: 'EndSearchTime',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      startAmount: 'StartAmount',
      startBizTime: 'StartBizTime',
      startSearchTime: 'StartSearchTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      endAmount: 'number',
      endBizTime: 'string',
      endSearchTime: 'string',
      outBizId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      startAmount: 'number',
      startBizTime: 'string',
      startSearchTime: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryEvaluateListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D35FF10E-1B2E-4ABA-8401-0AE17725F50B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryEvaluateListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEvaluateListResponseBody;
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
      body: QueryEvaluateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1990699401005016
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryFinancialAccountInfoResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 97426BC2-792E-41F5-92B8-73C710DA7779
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryFinancialAccountInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryFinancialAccountInfoResponseBody;
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
      body: QueryFinancialAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the **Granularity** parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-03
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills by month. The data queried is consistent with the data that is displayed for the specified billing cycle on the Billing Details tab of the Bill Details page in User Center.
   * *   DAILY: queries bills by day. The data queried is consistent with the data that is displayed for the specified day on the Billing Details tab of the Bill Details page in User Center.
   * 
   * You must set the **BillingDate** parameter before you can set the Granularity parameter to DAILY.
   * 
   * @example
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * Specifies whether to query data by billable item. Valid values:
   * 
   * *   false: does not query data by billable item. The data queried is consistent with the data that is displayed for the specified instance on the Billing Details tab of the Bill Details page in User Center.
   * *   true: queries data by billable item. The data queried is consistent with the data that is displayed for the specified billable item on the Billing Details tab of the Bill Details page in User Center.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isBillingItem?: boolean;
  /**
   * @remarks
   * Specifies whether to filter out a bill whose pretax gross amount and pretax amount are 0. Default value: false.******** Valid values:
   * 
   * *   false: does not filter the bill.
   * *   true: filters the bill.
   * 
   * @example
   * false
   */
  isHideZeroCharge?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. This parameter is required if the ProductCode parameter is set to the service code of Alibaba Cloud Marketplace.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * **
   * 
   * ****This parameter must be used together with the **ProductCode** parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryInstanceBillResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryInstanceBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceBillResponseBody;
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
      body: QueryInstanceBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of resources.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Specify the savings plan instance as the type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QueryInstanceByTagRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': QueryInstanceByTagRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * param is null
   */
  message?: string;
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the QueryInstanceByTag operation was called.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EC6C0B7-3397-5FAE-9915-8972CDDB1211
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The instances returned.
   */
  tagResource?: QueryInstanceByTagResponseBodyTagResource[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResource: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceByTagResponseBody;
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
      body: QueryInstanceByTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryInstanceGaapCostResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * CCBB1BB9-22F1-4177-867B-7A75D665B488
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: QueryInstanceGaapCostResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceGaapCostResponseBody;
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
      body: QueryInstanceGaapCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryInvoicingCustomerListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryInvoicingCustomerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInvoicingCustomerListResponseBody;
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
      body: QueryInvoicingCustomerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersRequest extends $tea.Model {
  /**
   * @remarks
   * The end time of the period during which the orders were created. By default, orders within the last hour are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time of the period during which the orders were created. By default, orders within the last hour are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T13:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   New: purchases an instance.
   * *   Renew: renews an instance.
   * *   Upgrade: upgrades the configurations of an instance.
   * *   Refund: applies for a refund.
   * 
   * @example
   * New
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of payment. Valid values for a non-refund order:
   * 
   * *   Unpaid: The order is not paid.
   * *   Paid: The order is paid.
   * *   Cancelled: The order is canceled.
   * 
   * > : You can set this parameter to NULL for a refund order.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      paymentStatus: 'PaymentStatus',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      orderType: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      paymentStatus: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   */
  data?: QueryOrdersResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61293E7A-3406-4447-8620-EC88B0AA66AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryOrdersResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrdersResponseBody;
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
      body: QueryOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the relationship. Set this parameter to the value of the RelationId response parameter returned by calling the QueryRelationList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryPermissionListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6E29451-A3CD-4705-806D-0112D08F5C49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryPermissionListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPermissionListResponseBody;
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
      body: QueryPermissionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the prepaid card takes effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end of the expiration time of prepaid cards to query. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start of the expiration time of prepaid cards to query. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryPrepaidCardsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7EA6C02D-06D0-4213-9C3B-E67910F7D1EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryPrepaidCardsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPrepaidCardsResponseBody;
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
      body: QueryPrepaidCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: QueryPriceEntityListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryPriceEntityListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPriceEntityListResponseBody;
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
      body: QueryPriceEntityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListRequest extends $tea.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return the total number of services. Default value: false.
   * 
   * @example
   * true
   */
  queryTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryTotalCount: 'QueryTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queryTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The information about all Alibaba Cloud services.
   */
  data?: QueryProductListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94858229-2758-4663-A7D0-99490D541F15
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryProductListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProductListResponseBody;
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
      body: QueryProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance whose fees are deducted by using the RI. If this parameter is left empty, the usage details of all instances are queried.
   * 
   * @example
   * jsdgfsdhgsdjh
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The time when the RI expires. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The instance type of the RI.
   * 
   * @example
   * Instancetyp
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service to which the RI is applied. Default value: ecsRi. Valid values:
   * 
   * *   ecsRi: ECS RI.
   * *   scu_bag: storage capacity unit (SCU).
   * 
   * This parameter is required.
   * 
   * @example
   * ecsRi
   */
  RICommodityCode?: string;
  /**
   * @remarks
   * The ID of the RI. If this parameter is left empty, the usage details of all RIs are queried.
   * 
   * @example
   * dsudfgdsjh
   */
  RIInstanceId?: string;
  /**
   * @remarks
   * The time when the RI was created. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      instanceSpec: 'InstanceSpec',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      RICommodityCode: 'RICommodityCode',
      RIInstanceId: 'RIInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductedInstanceId: 'string',
      endTime: 'string',
      instanceSpec: 'string',
      pageNum: 'number',
      pageSize: 'number',
      RICommodityCode: 'string',
      RIInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRIUtilizationDetailResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryRIUtilizationDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRIUtilizationDetailResponseBody;
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
      body: QueryRIUtilizationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the redemption coupon takes effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end time when the redemption coupon expires. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start time when the redemption coupon expires. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRedeemResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E503DC7B-E4F0-4B3C-BC89-BCECF1338F0B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryRedeemResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRedeemResponseBody;
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
      body: QueryRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The states of the relationships between the management account and its members. The valid values of this parameter are the enumeration members of the RelationshipStatusEnum data type. If you do not specify this parameter, valid relationship states are queried by default.
   * 
   * @example
   * RELATED
   */
  statusList?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1990699401005016
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRelationListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FC5D662-37FD-40A6-85B1-33442D815184
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryRelationListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRelationListResponseBody;
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
      body: QueryRelationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaRequest extends $tea.Model {
  itemCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      itemCodes: 'ItemCodes',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCodes: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 300
   */
  data?: string;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResellerAvailableQuotaResponseBody;
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
      body: QueryResellerAvailableQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdRequest extends $tea.Model {
  /**
   * @example
   * quota_low_balance
   */
  alarmType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  data?: QueryResellerUserAlarmThresholdResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': QueryResellerUserAlarmThresholdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResellerUserAlarmThresholdResponseBody;
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
      body: QueryResellerUserAlarmThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the expiration time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T13:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the expiration time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  expiryTimeStart?: string;
  /**
   * @remarks
   * Specifies whether partners are involved.
   * 
   * @example
   * true
   */
  includePartner?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      includePartner: 'IncludePartner',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      includePartner: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryResourcePackageInstancesResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourcePackageInstancesResponseBodyData,
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResourcePackageInstancesResponseBody;
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
      body: QueryResourcePackageInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-01-05 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * spn-XXXXXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance ID based on which the data is queried. Valid values:
   * 
   * *   spn: queries data based on the ID of the savings plan instance.
   * *   product: queries data based on the ID of the cloud service instance.
   * 
   * @example
   * spn
   */
  instanceType?: string;
  /**
   * @remarks
   * The language of the return data. Valid values:
   * 
   * *   ZH: Chinese
   * *   EN: English
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: QuerySavingsPlansDeductLogResponseBodyData;
  /**
   * @remarks
   * The message returned.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61293E7A-3406-4447-8620-EC88B0AA66AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: QuerySavingsPlansDeductLogResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySavingsPlansDeductLogResponseBody;
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
      body: QuerySavingsPlansDeductLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cycle based on which queries are performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @remarks
   * The identifier of the language.
   * 
   * Valid values:
   * 
   * *   EN: English.
   * *   ZH: Chinese.
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * instance_type
   */
  moduleCode?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The payment mode. Valid values: total: all upfront. half: half upfront. zero: no upfront.
   * 
   * This parameter is required.
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs.g6
   */
  spec?: string;
  spnCommodityCode?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values: ecs: Elastic Compute Service (ECS) compute type. universal: general-purpose type.
   * 
   * This parameter is required.
   * 
   * @example
   * universal
   */
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      cycle: 'Cycle',
      locale: 'Locale',
      moduleCode: 'ModuleCode',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      payMode: 'PayMode',
      region: 'Region',
      spec: 'Spec',
      spnCommodityCode: 'SpnCommodityCode',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      cycle: 'string',
      locale: 'string',
      moduleCode: 'string',
      pageNum: 'number',
      pageSize: 'number',
      payMode: 'string',
      region: 'string',
      spec: 'string',
      spnCommodityCode: 'string',
      spnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: QuerySavingsPlansDiscountResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QuerySavingsPlansDiscountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySavingsPlansDiscountResponseBody;
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
      body: QuerySavingsPlansDiscountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceRequest extends $tea.Model {
  commodityCode?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the return data. Valid values:
   * 
   * *   ZH: Chinese
   * *   EN: English
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the Instance. 
   * 
   * *  NORMAL
   * * RELEASE
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QuerySavingsPlansInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      endTime: 'string',
      instanceId: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: QuerySavingsPlansInstanceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61293E7A-3406-4447-8620-EC88B0AA66AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
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
      data: QuerySavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySavingsPlansInstanceResponseBody;
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
      body: QuerySavingsPlansInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillRequest extends $tea.Model {
  /**
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @example
   * false
   */
  isDisplayLocalCurrency?: boolean;
  /**
   * @example
   * true
   */
  isHideZeroCharge?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * 12233
   */
  recordID?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @example
   * SubscriptionOrder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      recordID: 'RecordID',
      subscriptionType: 'SubscriptionType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      isDisplayLocalCurrency: 'boolean',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      recordID: 'string',
      subscriptionType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QuerySettleBillResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * AE3F4057-DFC9-4B81-8858-F620651010C9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: QuerySettleBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySettleBillResponseBody;
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
      body: QuerySettleBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  lang?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page. You do not need to set this parameter if you query coverage details for the first time. The response returns a token that you can use to query coverage details of the next page. If a null value is returned for the NextPageToken parameter, no more coverage details can be queried.
   * 
   * @example
   * 080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of entries to be returned on each page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the pricing object.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_type
   */
  priceEntityCode?: string;
  /**
   * @remarks
   * The conditions of the pricing factors.
   */
  priceFactorConditionMap?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      lang: 'Lang',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      priceEntityCode: 'PriceEntityCode',
      priceFactorConditionMap: 'PriceFactorConditionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      lang: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      priceEntityCode: 'string',
      priceFactorConditionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  lang?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page. You do not need to set this parameter if you query coverage details for the first time. The response returns a token that you can use to query coverage details of the next page. If a null value is returned for the NextPageToken parameter, no more coverage details can be queried.
   * 
   * @example
   * 080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of entries to be returned on each page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the pricing object.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_type
   */
  priceEntityCode?: string;
  /**
   * @remarks
   * The conditions of the pricing factors.
   */
  priceFactorConditionMapShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      lang: 'Lang',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      priceEntityCode: 'PriceEntityCode',
      priceFactorConditionMapShrink: 'PriceFactorConditionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      lang: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      priceEntityCode: 'string',
      priceFactorConditionMapShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: QuerySkuPriceListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QuerySkuPriceListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySkuPriceListResponseBody;
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
      body: QuerySkuPriceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the split bills of the specified member. If you leave this parameter empty, the split bills of the current account are queried by default.
   * 
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: subscription PayAsYouGo: pay-as-you-go This parameter must be used together with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QuerySplitItemBillResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QuerySplitItemBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySplitItemBillResponseBody;
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
      body: QuerySplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataRequest extends $tea.Model {
  /**
   * @remarks
   * The time type of the usage data. Set the parameter based on the description in the documentation of the specified service. Valid values:
   * 
   * *   Raw
   * *   Hour
   * *   Day
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  dataType?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-21T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the record from which the usage data starts to return. The usage data records whose names are alphabetically after the value of the Marker parameter are returned. By default, the usage data starts to return from the earliest record.
   * 
   * @example
   * NextToken
   */
  marker?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 200. Default value: 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-20T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The service whose usage data you want to query and the details of the usage data. The parameter value is usually set to the code of a service. Various usage models are provided for different services.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      endTime: 'EndTime',
      marker: 'Marker',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      endTime: 'string',
      marker: 'string',
      ownerId: 'number',
      pageSize: 'number',
      startTime: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryUserOmsDataResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: QueryUserOmsDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserOmsDataResponseBody;
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
      body: QueryUserOmsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required for scenarios that need idempotence. The UUID that is used to ensure the idempotence of the request.
   * 
   * @example
   * 793F021C-B589-1225-82A9-99232AEBE494
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required for unsubscription scenarios. Valid values: 1 and 0. A value of 1 specifies that the instance is immediately released. A value of 0 specifies that the instance is shut down based on the shutdown policy. This parameter is supported only for specified services. Default value: 1.
   * 
   * @example
   * 1
   */
  immediatelyRelease?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required for unsubscription scenarios. Do not specify a custom name for this parameter.
   * 
   * @example
   * i-bp1etb69sqxgl4*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the service. This parameter is required for unsubscription scenarios.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. This parameter is required for unsubscription scenarios. Unless otherwise specified, set this parameter to an empty string.
   * 
   * @example
   * ”“
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      immediatelyRelease: 'ImmediatelyRelease',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      immediatelyRelease: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * ResourceNotExists
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: RefundInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * false
   */
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
      data: RefundInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundInstanceResponseBody;
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
      body: RefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance. Separate multiple IDs with commas (,). A maximum of 100 IDs can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-xxxxxxxxxxxx
   */
  instanceIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The method that is used to renew the instance. Valid values:
   * 
   * AutoRenewal: automatically renews the instance.
   * 
   * ManualRenewal: manually renews the instance.
   * 
   * NotRenewal: does not renew the instance.
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * Subscription: the subscription billing method.
   * 
   * PayAsYouGo: the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Invalid_Product_Code
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: ReleaseInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which can be used for troubleshooting.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * A value of true indicates that the execution is complete.
   * 
   * A value of false indicates that an error occurs during the execution.
   * 
   * @example
   * true
   */
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
      data: ReleaseInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
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
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The ID of the financial relationship between the management account and the member. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * RelationId
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * @example
   * enterprise_group
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * This parameter is required.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      parentUserId: 'number',
      relationId: 'number',
      relationType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: RelieveAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: RelieveAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RelieveAccountRelationResponseBody;
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
      body: RelieveAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceRequest extends $tea.Model {
  /**
   * @example
   * JASIOFKVNVIXXXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-skjdhaskjdh
   */
  instanceId?: string;
  ownerId?: number;
  parameter?: RenewChangeInstanceRequestParameter[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  renewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': RenewChangeInstanceRequestParameter },
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: RenewChangeInstanceResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: RenewChangeInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewChangeInstanceResponseBody;
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
      body: RenewChangeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ASKJHKLASJHAFSLKJH
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * rm-skjdhaskjdh
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The duration of the subscription renewal. Unit: months. Valid values:
   * 
   * *   1 to 9
   * *   12
   * *   24
   * *   36
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  renewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: RenewInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: RenewInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
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
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageRequest extends $tea.Model {
  /**
   * @remarks
   * The renewal period of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the resource plan takes effect. If you leave this parameter empty, the resource plan immediately takes effect by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * lskd****sljhsdj
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the validity period for the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: RenewResourcePackageResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 204322301110333
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RenewResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewResourcePackageResponseBody;
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
      body: RenewResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllExpirationDayRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The expiration date. You can set an expiration date only for ECS instances that have not expired. The expiration date that you specify do not take effect on expired ECS instances. After the expiration date is set, the expiration date is used when you renew ECS instances.
   * 
   * You can set the expiration date to a day from the 1st to the 28th of each month.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  unifyExpireDay?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      unifyExpireDay: 'UnifyExpireDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      unifyExpireDay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllExpirationDayResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * The message that is returned
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * The ID of the request
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllExpirationDayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAllExpirationDayResponseBody;
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
      body: SetAllExpirationDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance. You can enable auto-renewal for up to 100 subscription instances at a time. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-askjdhaskfjh
   */
  instanceIDs?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * 
   * *   1
   * *   2
   * *   3
   * *   6
   * *   12
   * 
   * >  This parameter is required if the RenewalStatus parameter is set to AutoRenewal.
   * 
   * @example
   * 1
   */
  renewalPeriod?: number;
  /**
   * @remarks
   * The unit of the auto-renewal period. Valid values:
   * 
   * *   M: months
   * *   Y: years
   * 
   * >  This parameter is required if the RenewalStatus parameter is set to AutoRenewal.
   * 
   * @example
   * M
   */
  renewalPeriodUnit?: string;
  /**
   * @remarks
   * The status of renewal. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * This parameter is required.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIDs: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      renewalStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetRenewalResponseBody;
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
      body: SetRenewalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdRequest extends $tea.Model {
  /**
   * @example
   * [{\\"denominator\\":100,\\"numerator\\":30,\\"thresholdType\\":1}]
   */
  alarmThresholds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * quota_low_balance
   */
  alarmType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmThresholds: 'AlarmThresholds',
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmThresholds: 'string',
      alarmType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class SetResellerUserAlarmThresholdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetResellerUserAlarmThresholdResponseBody;
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
      body: SetResellerUserAlarmThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * The quota of a quota ledger. Unit: CNY.
   * 
   * This parameter is required.
   * 
   * @example
   * 750
   */
  amount?: string;
  /**
   * @remarks
   * You do not need to set the parameter.
   * 
   * @example
   * N/A
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the business.
   * 
   * @example
   * OD2022040818295234777795624764689
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
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

export class SetResellerUserQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetResellerUserQuotaResponseBody;
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
      body: SetResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the business. Valid values: FREEZE: the frozen business of the account. TRUSTEESHIP: the hosted business of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * FREEZE
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: string;
  /**
   * @remarks
   * The account status that you want to set. Valid values: Freeze: The account is frozen. Thaw: The account is unfrozen. Trusteeship: The account is hosted. TrusteeshipCancel: The account is not hosted.
   * 
   * This parameter is required.
   * 
   * @example
   * Freeze
   */
  status?: string;
  /**
   * @remarks
   * 停机模式
   * 取值：
   *     0：普通停机
   *     1：立即停机
   * 
   * @example
   * 0
   */
  stopMode?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      status: 'Status',
      stopMode: 'StopMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      ownerId: 'string',
      status: 'string',
      stopMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @example
   * true
   */
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

export class SetResellerUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetResellerUserStatusResponseBody;
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
      body: SetResellerUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSRequest extends $tea.Model {
  /**
   * @remarks
   * The initial billing cycle from which bills start to be pushed. After you subscribe to the bills, the system automatically pushes the data that is generated from the initial billing cycle to the current time. If the SubscribeType parameter is set to MonthBill, this parameter is invalid. Historical data is not pushed again. The data generated within the last year can be pushed.
   * 
   * @example
   * 2021-03
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The owner ID of the OSS bucket that stores the bills. This parameter is required if you are a bidder or reseller and want to push data to an OSS bucket of a member account. In this case, you must specify this account as the account used to call this operation and grant the AliyunConsumeDump2OSSRole permission to this account. If you are a regular user, you do not need to set this parameter. By default, your account is used to call this operation.
   * 
   * @example
   * 12341324
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The path of the OSS bucket.
   * 
   * @example
   * testpath
   */
  bucketPath?: string;
  /**
   * @remarks
   * The type of the account whose bills are to be pushed if multi-tier accounts are involved. Valid values:
   * 
   * *   MA: the master account and a non-managed member account in Finance Cloud
   * *   ACP1: a member account of a virtual network operator (VNO)
   * 
   * Default value: MA.
   * 
   * @example
   * MA
   */
  multAccountRelSubscribe?: string;
  /**
   * @remarks
   * The upper limit of the number of lines in a single file. When the bill file exceeds the upper limit, it will be split into multiple files and merged into a compressed package.
   * 
   * @example
   * 300000
   */
  rowLimitPerFile?: number;
  /**
   * @remarks
   * The OSS bucket that stores the bills to which you want to subscribe.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxx-bucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The type of the bill to which you want to subscribe. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: detailed bills of billable items
   * *   InstanceDetailForBillingPeriod: detailed bills of instances
   * *   BillingItemDetailMonthly: billable item-based bills summarized by billing cycle
   * *   InstanceDetailMonthly: instance-based bills summarized by billing cycle
   * *   SplitItemDetailDaily: split bills summarized by day
   * *   MonthBill: monthly bills in the PDF format. You can subscribe to the monthly PDF bills only of the master account.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  /**
   * @remarks
   * Whether to protect network communications through the SSL (Secure Sockets Layer) encryption protocol. When this parameter is set to true, it means that SSL encryption is enabled to ensure the security and integrity of data transmission.
   * 
   * @example
   * true
   */
  usingSsl?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeType: 'SubscribeType',
      usingSsl: 'UsingSsl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      bucketOwnerId: 'number',
      bucketPath: 'string',
      multAccountRelSubscribe: 'string',
      rowLimitPerFile: 'number',
      subscribeBucket: 'string',
      subscribeType: 'string',
      usingSsl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F61FCE4B-9B56-4FD9-A17E-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubscribeBillToOSSResponseBody;
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
      body: SubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Specify savings plan instance as the type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1537A007-72D7-4165-8A26-8694A38E219A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSRequest extends $tea.Model {
  /**
   * @remarks
   * The type of accounts whose bills are to be pushed if multi-tier accounts are involved. Valid values:
   * 
   * *   MA: management account.
   * *   ACP1: member account of a virtual network operator (VNO).
   * 
   * Default value: MA.
   * 
   * @example
   * MA
   */
  multAccountRelSubscribe?: string;
  /**
   * @remarks
   * The type of the bill to which you want to subscribe. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: bills of billable items
   * *   InstanceDetailForBillingPeriod: bills of instances
   * *   BillingItemDetailMonthly: billable item-based bills summarized by billing cycle
   * *   InstanceDetailMonthly: instance-based bills summarized by billing cycle
   * *   SplitItemDetailDaily: split bills summarized by day
   * *   MonthBill: monthly bills in the PDF format You can subscribe to the monthly PDF bills only of the master account.
   * 
   * This parameter is required.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multAccountRelSubscribe: 'string',
      subscribeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D23FE74C-742F-4624-A82B-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnsubscribeBillToOSSResponseBody;
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
      body: UnsubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter is valid only if the TagKey.n parameter is not set. Valid values: true and false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The IDs of resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Specify the savings plan instance as the type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7C15585-8349-4C62-BEE4-5A391841B9BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the resource plan takes effect. If you leave this parameter empty, the resource plan immediately takes effect by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * OSSBAG-cn-0xl*****x002
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The specifications to which you want to upgrade the resource plan.
   * 
   * @example
   * 51200
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: UpgradeResourcePackageResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 73387246238746
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpgradeResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeResourcePackageResponseBody;
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
      body: UpgradeResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The IP address of the request
   * 
   * @example
   * HostId
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the financial relationship.
   * 
   * @example
   * RelationId
   */
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      relationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceRequestResourceInstanceList extends $tea.Model {
  /**
   * @remarks
   * The split item of the shared instance. This parameter is required only for shared instances.
   * 
   * *   Eight cloud services support bill splitting. The commodity codes of the eight services are oss, dcdn, snapshot, vod, cdn, live, cbwp, and pcdn.
   * *   You can obtain the split item of a shared instance by calling QueryCostUnitResource operation to obtain all resource instances within a cost center.
   * 
   * @example
   * qwer1-cn-beijing
   */
  apportionCode?: string;
  /**
   * @remarks
   * The commodity code of the resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou;standard
   */
  resourceId?: string;
  /**
   * @remarks
   * The user ID of the resource instance owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 273394581313325532
   */
  resourceUserId?: number;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      commodityCode: 'CommodityCode',
      resourceId: 'ResourceId',
      resourceUserId: 'ResourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      commodityCode: 'string',
      resourceId: 'string',
      resourceUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether resources are allocated to the specified cost center. Valid values:
   * 
   * *   true: The resources are allocated to the specified cost center.
   * *   false: The resources fail to be allocated to the specified cost center.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the destination cost center.
   * 
   * @example
   * 32857346527
   */
  toUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the destination cost center.
   * 
   * @example
   * 34857693874
   */
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      toUnitId: 'number',
      toUnitUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 1323125534
   */
  invoiceApplyId?: number;
  static names(): { [key: string]: string } {
    return {
      invoiceApplyId: 'InvoiceApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceApplyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * HostId
   * 
   * @example
   * HostId
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202657601410661
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponseBodyAgRelationDto extends $tea.Model {
  /**
   * @remarks
   * The ID of the account that is used to call the CreateAgAccount operation.
   * 
   * @example
   * 1785287436011964
   */
  mpk?: string;
  /**
   * @remarks
   * The ID of the account that is created.
   * 
   * @example
   * 1728240534507590
   */
  pk?: string;
  /**
   * @remarks
   * The role of the account that is created.
   * 
   * @example
   * admin-role
   */
  ramAdminRoleName?: string;
  /**
   * @remarks
   * The type of the relationship.
   * 
   * @example
   * FINACE_CLOUD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      ramAdminRoleName: 'RamAdminRoleName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      ramAdminRoleName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequestUnitEntityList extends $tea.Model {
  /**
   * @remarks
   * The user ID of the owner of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 982375623
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBodyDataCostUnitDtoList extends $tea.Model {
  /**
   * @remarks
   * The user ID of the owner of the cost center.
   * 
   * @example
   * 26387563
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 84327659328
   */
  unitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The list of cost center entities.
   */
  costUnitDtoList?: CreateCostUnitResponseBodyDataCostUnitDtoList[];
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': CreateCostUnitResponseBodyDataCostUnitDtoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestParameter extends $tea.Model {
  /**
   * @remarks
   * The code property of the Nth module. Value of N: 1 to 100. If multiple module property parameters are involved, concatenate multiple parameters based on the value of N in sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  code?: string;
  /**
   * @remarks
   * The value property of the Nth module. Value of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * disk
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance for which the order was created.
   * 
   * @example
   * OSSBAG-cn-v1hxxxxx23
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order that was created.
   * 
   * @example
   * 20240xxxx21
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * @example
   * OSSBAG-cn-****s
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202407022550621
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202110260001
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the call is complete.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 12431
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 123412343
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The information about the budget. The BudgetCycleType parameter indicates the cycle of the budget. Valid values: daily, monthly, quarterly, and yearly. The TotalBudgetAmount parameter indicates the total budget. The BudgetMemo parameter indicates the remarks of the budget.
   * 
   * @example
   * {           "budgetCycleType": "monthly",           "budgetMemo": "",           "totalBudgetAmount": 220         }
   */
  budget?: { [key: string]: any };
  /**
   * @remarks
   * The name of the budget.
   * 
   * @example
   * Annual budget
   */
  budgetName?: string;
  /**
   * @remarks
   * The status of the budget.
   * 
   * @example
   * overdue
   */
  budgetStatus?: string;
  /**
   * @remarks
   * The type of the budget.
   * 
   * @example
   * cost
   */
  budgetType?: string;
  /**
   * @remarks
   * The information about the estimate-to-actual analysis. The ActualConsumeSum parameter indicates the accumulated actual value. The ActualAddForecastedAmount parameter indicates the sum of accumulated actual value and predicted value. If the BudgetType parameter is set to cost, the sum of actual value and predicted value includes the actual cost incurred from the budget start date to the current date and the predicted cost from the current date to the budget end date. If the BudgetType parameter is set to asset, the sum of actual value and predicted value includes the actual usage or coverage from the budget start date to the budget end date. If the budget end date minus the current date is more than one year, the part that exceeds one year is not included. The ActualAndBudgetComparison parameter indicates the comparison between the actual value and the predicted value. The value of the ActualAndBudgetComparison parameter is calculated based on the following formula: Accumulated actual value/Total budget × 100%.
   * 
   * @example
   * {           "actualConsumeSum": 88.6,           "actualAddForecastedAmount": 89.6,           "actualAndBudgetComparison": "20.73%"         }
   */
  calculatedValues?: { [key: string]: any };
  /**
   * @remarks
   * The information about the billing cycle. The ConsumePeriodBegin parameter indicates the start date of the budget. The ConsumePeriodEnd parameter indicates the end date of the budget.
   * 
   * @example
   * {           "consumePeriodBegin": "2022-10",           "consumePeriodEnd": "2022-11"         }
   */
  consumePeriod?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      budget: 'Budget',
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      calculatedValues: 'CalculatedValues',
      consumePeriod: 'ConsumePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      calculatedValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consumePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The site of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  items?: DescribeCostBudgetsSummaryResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries that are returned.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': DescribeCostBudgetsSummaryResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The allocation month. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @remarks
   * The allocation status. Valid values:
   * 
   * *   amortized: allocated
   * *   unAmortized: not allocated
   * 
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The ID of the account to which the resource belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @remarks
   * The name of the account to which the resource belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  consumePeriod?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * 1234
   */
  costUnitCode?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated to the current allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount. Invoicing is supported.
   * 
   * @example
   * 0
   */
  expenditureAmount?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated before the allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The specific service resource.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The code of the specific service resource.
   * 
   * @example
   * rds
   */
  productDetailCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * China (Hangzhou)
   */
  region?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount to be allocated to one or more future allocation months. Invoicing is supported.
   * 
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The round-off amount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @remarks
   * The name of the account to which the split item belongs.
   * 
   * @example
   * test**1122
   */
  splitAccountName?: string;
  /**
   * @remarks
   * The ID of the split item.
   * 
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @remarks
   * The name of the specific service resource to which the split item belongs.
   * 
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag of the instance.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The data entries returned.
   */
  items?: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the results started to return. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * 2022-10
   */
  amortizationPeriod?: string;
  /**
   * @example
   * 2022-10-10
   */
  amortizationPeriodDay?: string;
  /**
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 2022-10
   */
  consumePeriod?: string;
  /**
   * @example
   * 2022-10-10
   */
  consumePeriodDay?: string;
  costUnit?: string;
  /**
   * @example
   * 1234
   */
  costUnitCode?: string;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  expenditureAmount?: number;
  /**
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  /**
   * @example
   * rds
   */
  productDetailCode?: string;
  productName?: string;
  region?: string;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  resourceGroup?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * test**1122
   */
  splitAccountName?: string;
  /**
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * tag
   */
  tag?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationPeriodDay: 'AmortizationPeriodDay',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      consumePeriodDay: 'ConsumePeriodDay',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationPeriodDay: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      consumePeriodDay: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData extends $tea.Model {
  /**
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @example
   * cn
   */
  hostId?: string;
  items?: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      hostId: 'HostId',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      hostId: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 202210
   */
  consumePeriod?: string;
  costUnit?: string;
  /**
   * @example
   * 1234
   */
  costUnitCode?: string;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  expenditureAmount?: number;
  /**
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  /**
   * @example
   * rds
   */
  productDetailCode?: string;
  productName?: string;
  region?: string;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  resourceGroup?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * test**1122
   */
  splitAccountName?: string;
  /**
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * tag
   */
  tag?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData extends $tea.Model {
  /**
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  items?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The amount deducted with credit refund.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 122
   */
  billAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The billing date. This parameter is returned only if the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-20
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item. A value is returned only if the IsBillingItem parameter is set to true.
   * 
   * @example
   * Bandwidth
   */
  billingItem?: string;
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * disk
   */
  billingItemCode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The type of business.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of currency. Valid values:
   * 
   * *   CNY
   * *   USD
   * *   JPY
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted with vouchers.
   * 
   * @example
   * 0.1
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted with coupons.
   * 
   * @example
   * 0.1
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted with prepaid cards.
   * 
   * @example
   * 0.1
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted with resource plans. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * 0.1
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * CPU：12
   */
  instanceConfig?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-dadada
   */
  instanceID?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ecs.sn1ne.3xlarge
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.1
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill.
   * 
   * *   SubscriptionOrder: the subscription bill.
   * *   PayAsYouGoBill: the pay-as-you-go bill,
   * *   Refund: the refund.
   * *   Adjustment: the adjustment bill.
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  itemName?: string;
  /**
   * @remarks
   * The unit price of the service. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * CNY
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The unsettled amount.
   * 
   * @example
   * 0.1
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the account that owns the resource. This parameter is returned in multi-account payment scenario.
   * 
   * @example
   * 123
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is not included.
   * 
   * @example
   * 0.1
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0.1
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0.1
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The service duration.
   * 
   * @example
   * 3600
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the service duration.
   * 
   * @example
   * Second
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag of the resource.
   * 
   * @example
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @remarks
   * The usage of the service. This parameter is valid only when the isBillingItem parameter is set to true. The usage is the total usage in all bills in the billing cycle, not the amount that you purchase. For example, if 1 GB of storage is used and bills are generated every hour, the usage is 1 GB per hour. In this case, the usage is 24 GB per day.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * Hangzhou Zone B
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      billingType: 'BillingType',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      itemName: 'ItemName',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      billingType: 'string',
      bizType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      itemName: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 122
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bill.
   */
  items?: DescribeInstanceBillResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The position where the query stopped. If this parameter is left empty, all the results are returned. If you perform another call, you must set the NextToken parameter to the value of this parameter.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceBillResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * 2022-10
   */
  amortizationPeriod?: string;
  /**
   * @example
   * 2022-10-10
   */
  amortizationPeriodDay?: string;
  /**
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 2022-10
   */
  consumePeriod?: string;
  costUnit?: string;
  /**
   * @example
   * 1234
   */
  costUnitCode?: string;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 10
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 10
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * CPU:12
   */
  instanceConfig?: string;
  /**
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @example
   * 100
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  /**
   * @example
   * rds
   */
  productDetailCode?: string;
  productName?: string;
  /**
   * @example
   * spn-001
   */
  referFrInstanceID?: string;
  /**
   * @example
   * 185xxxxx489
   */
  referFrOwnerID?: string;
  /**
   * @example
   * savingplan_common_public_cn
   */
  referFrProductDetailCode?: string;
  region?: string;
  resourceGroup?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * 12@test.com
   */
  splitAccountName?: string;
  /**
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  unusedAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationRoundDownDiscount?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationPeriodDay: 'AmortizationPeriodDay',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      referFrInstanceID: 'ReferFrInstanceID',
      referFrOwnerID: 'ReferFrOwnerID',
      referFrProductDetailCode: 'ReferFrProductDetailCode',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      unusedAmortizationDeductedByCoupons: 'UnusedAmortizationDeductedByCoupons',
      unusedAmortizationInvoiceDiscount: 'UnusedAmortizationInvoiceDiscount',
      unusedAmortizationPretaxAmount: 'UnusedAmortizationPretaxAmount',
      unusedAmortizationPretaxGrossAmount: 'UnusedAmortizationPretaxGrossAmount',
      unusedAmortizationRoundDownDiscount: 'UnusedAmortizationRoundDownDiscount',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationPeriodDay: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCoupons: 'number',
      instanceConfig: 'string',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      referFrInstanceID: 'string',
      referFrOwnerID: 'string',
      referFrProductDetailCode: 'string',
      region: 'string',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      unusedAmortizationDeductedByCoupons: 'number',
      unusedAmortizationInvoiceDiscount: 'number',
      unusedAmortizationPretaxAmount: 'number',
      unusedAmortizationPretaxGrossAmount: 'number',
      unusedAmortizationRoundDownDiscount: 'number',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData extends $tea.Model {
  /**
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  items?: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 400
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue extends $tea.Model {
  /**
   * @remarks
   * The attribute value that corresponds to the module code.
   * 
   * @example
   * 2 Cores and 4 GB Memory (Basic Edition)
   */
  name?: string;
  /**
   * @remarks
   * The description of the module values.
   * 
   * @example
   * Connections: 4,000 IOPS is related to storage space
   */
  remark?: string;
  /**
   * @remarks
   * The type of the attribute value that corresponds to the module code. Valid values:
   * 
   * *   single_float: single value
   * *   range_float: range value
   * 
   * @example
   * single_string
   */
  type?: string;
  /**
   * @remarks
   * The attribute value that corresponds to the module code.
   * 
   * >  If the Type parameter is set to range_float, the valid values of this parameter range from 1024 to 1024000. A value of 1024 indicates that the step size is 1024.
   * 
   * @example
   * mysql.n2.medium.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValues extends $tea.Model {
  attributeValue?: DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttribute extends $tea.Model {
  /**
   * @remarks
   * The code of the attribute.
   * 
   * @example
   * DBInstanceStorage
   */
  code?: string;
  /**
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * Capacity
   */
  name?: string;
  /**
   * @remarks
   * The unit of the attribute.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The attribute values.
   */
  values?: DescribePricingModuleResponseBodyDataAttributeListAttributeValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      unit: 'string',
      values: DescribePricingModuleResponseBodyDataAttributeListAttributeValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeList extends $tea.Model {
  attribute?: DescribePricingModuleResponseBodyDataAttributeListAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModuleConfigList extends $tea.Model {
  configList?: string[];
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModule extends $tea.Model {
  configList?: DescribePricingModuleResponseBodyDataModuleListModuleConfigList;
  /**
   * @remarks
   * The currency. Default value: CNY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * Instance
   */
  moduleName?: string;
  /**
   * @remarks
   * The price type. Valid values:
   * 
   * *   Usage: usage price
   * *   Hour: hourly price
   * *   Day: daily price
   * *   Week: weekly price
   * *   Month: monthly price
   * *   Year: annual price
   * 
   * @example
   * Month
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      currency: 'Currency',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: DescribePricingModuleResponseBodyDataModuleListModuleConfigList,
      currency: 'string',
      moduleCode: 'string',
      moduleName: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleList extends $tea.Model {
  module?: DescribePricingModuleResponseBodyDataModuleListModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataModuleListModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The module attributes.
   */
  attributeList?: DescribePricingModuleResponseBodyDataAttributeList;
  /**
   * @remarks
   * The pricing information of modules.
   */
  moduleList?: DescribePricingModuleResponseBodyDataModuleList;
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
      moduleList: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: DescribePricingModuleResponseBodyDataAttributeList,
      moduleList: DescribePricingModuleResponseBodyDataModuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The allocation month. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @remarks
   * The allocation status. Valid values:
   * 
   * *   amortized: allocated
   * *   unAmortized: not allocated
   * 
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The ID of the account to which the resource belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @remarks
   * The name of the account to which the resource belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  consumePeriod?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated to the current allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount. Invoicing is supported.
   * 
   * @example
   * 0
   */
  expenditureAmount?: number;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated before the current allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The specific service resource.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The code of the specific service resource.
   * 
   * @example
   * rds
   */
  productDetailCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount to be allocated to one or more future allocation months. Invoicing is supported.
   * 
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  /**
   * @remarks
   * The round-off amount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      roundDownDiscount: 'number',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The data entries returned.
   */
  items?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the results started to return. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 202210
   */
  consumePeriod?: string;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  expenditureAmount?: number;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  /**
   * @example
   * rds
   */
  productDetailCode?: string;
  productName?: string;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      roundDownDiscount: 'number',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBodyData extends $tea.Model {
  /**
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  items?: DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources deducted from deduction plans.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name and billing method of the service.
   */
  commodityName?: string;
  /**
   * @remarks
   * The coverage rate of a deduction plan.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The currency in which deduction plans were priced.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of the resources deducted from a deduction plan.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The end of the time range in which the coverage details were queried.
   * 
   * @example
   * 2021-04-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of a pay-as-you-go instance.
   * 
   * @example
   * i-bp1d9x623987rlj0dx4xx
   */
  instanceId?: string;
  /**
   * @remarks
   * The specifications of a deduction plan.
   * 
   * @example
   * ecs.t5-lc2m1.nano
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The amount of the bill.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   */
  productName?: string;
  /**
   * @remarks
   * The region.
   */
  region?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * cn-hangzhou-dg-a01
   */
  regionNo?: string;
  /**
   * @remarks
   * The beginning of the time range in which the coverage details were queried.
   * 
   * @example
   * 2021-04-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The total amount of resources consumed.
   * 
   * @example
   * 1
   */
  totalQuantity?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 123745698925000
   */
  userId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test13@test.aliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * The code of the zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  /**
   * @remarks
   * The zone.
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      paymentAmount: 'PaymentAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      region: 'Region',
      regionNo: 'RegionNo',
      startTime: 'StartTime',
      totalQuantity: 'TotalQuantity',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      coveragePercentage: 'number',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      paymentAmount: 'number',
      productCode: 'string',
      productName: 'string',
      region: 'string',
      regionNo: 'string',
      startTime: 'string',
      totalQuantity: 'number',
      userId: 'string',
      userName: 'string',
      zone: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeResourceCoverageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The token of the next page.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeResourceCoverageDetailResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  /**
   * @remarks
   * The coverage rate of deduction plans within the specified period.
   * 
   * @example
   * 0.1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The period.
   * 
   * The value is in the format of yyyyMMddHH.
   * 
   * @example
   * 2020110100
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyDataTotalCoverage extends $tea.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources deducted from deduction plans.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The total coverage rate of deduction plans.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The total amount of the resources deducted from deduction plans.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The total amount of resources consumed.
   * 
   * @example
   * 1
   */
  totalQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      coveragePercentage: 'CoveragePercentage',
      deductQuantity: 'DeductQuantity',
      totalQuantity: 'TotalQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      coveragePercentage: 'number',
      deductQuantity: 'number',
      totalQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the coverage rate of deduction plans within a period.
   */
  periodCoverage?: DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The information about the total coverage data of deduction plans.
   */
  totalCoverage?: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * region
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * cn-shenzhen
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties extends $tea.Model {
  property?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration extends $tea.Model {
  /**
   * @remarks
   * The name of the validity period.
   * 
   * @example
   * 6 Month
   */
  name?: string;
  /**
   * @remarks
   * The unit of the validity period for the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  unit?: string;
  /**
   * @remarks
   * The value of the validity period.
   * 
   * @example
   * 6
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations extends $tea.Model {
  availableDuration?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration[];
  static names(): { [key: string]: string } {
    return {
      availableDuration: 'AvailableDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDuration: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification extends $tea.Model {
  /**
   * @remarks
   * The validity periods available for the resource plan.
   */
  availableDurations?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations;
  /**
   * @remarks
   * The name of the specification.
   * 
   * @example
   * 1TB
   */
  name?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * 1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      availableDurations: 'AvailableDurations',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDurations: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations,
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications extends $tea.Model {
  specification?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification[];
  static names(): { [key: string]: string } {
    return {
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specification: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType extends $tea.Model {
  /**
   * @remarks
   * The code of the resource plan.
   * 
   * @example
   * FPT_ossbag_deadlineAcc_CdnOut_common_sz
   */
  code?: string;
  /**
   * @remarks
   * The name of the resource plan type.
   * 
   * @example
   * Back-to-origin traffic plan - China (Shenzhen)
   */
  name?: string;
  /**
   * @remarks
   * The properties of the resource plan.
   */
  properties?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties;
  /**
   * @remarks
   * The specifications of the resource plan.
   */
  specifications?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      properties: 'Properties',
      specifications: 'Specifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      properties: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties,
      specifications: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes extends $tea.Model {
  packageType?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType[];
  static names(): { [key: string]: string } {
    return {
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageType: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage extends $tea.Model {
  /**
   * @remarks
   * The name of the resource plan.
   * 
   * @example
   * Object Storage Service (OSS) resource plan (monthly)
   */
  name?: string;
  /**
   * @remarks
   * The types of the resource plans.
   */
  packageTypes?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ossbag
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageTypes: 'PackageTypes',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageTypes: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes,
      productCode: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackages extends $tea.Model {
  resourcePackage?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage[];
  static names(): { [key: string]: string } {
    return {
      resourcePackage: 'ResourcePackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackage: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details about the resource plans.
   */
  resourcePackages?: DescribeResourcePackageProductResponseBodyDataResourcePackages;
  static names(): { [key: string]: string } {
    return {
      resourcePackages: 'ResourcePackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackages: DescribeResourcePackageProductResponseBodyDataResourcePackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources that are deducted.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The type of the currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of the deducted resources.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The end of the time range in which the usage details were queried.
   * 
   * @example
   * 2021-04-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * linux
   */
  imageType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.t5-lc2m1.nano
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The equivalent of pay-as-you-go costs.
   * 
   * @example
   * 0.06
   */
  postpaidCost?: string;
  /**
   * @remarks
   * The potential net savings.
   * 
   * @example
   * 0.13
   */
  potentialSavedCost?: string;
  /**
   * @remarks
   * The number of deduction plans.
   * 
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @remarks
   * The region.
   */
  region?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * cn-hangzhou-dg-a01
   */
  regionNo?: string;
  /**
   * @remarks
   * The fee of the deduction plan.
   * 
   * @example
   * 0
   */
  reservationCost?: string;
  /**
   * @remarks
   * The ID of the deduction plan.
   * 
   * @example
   * ecsri-bp147nnfz21225k9mpix00
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The net savings.
   * 
   * @example
   * 0.06
   */
  savedCost?: string;
  /**
   * @remarks
   * The beginning of the time range in which the usage details were queried.
   * 
   * @example
   * 2021-04-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deduction plan.
   * 
   * @example
   * Valid
   */
  status?: string;
  /**
   * @remarks
   * The name of the status.
   */
  statusName?: string;
  /**
   * @remarks
   * The total capacity of the deduction plan.
   * 
   * @example
   * 2
   */
  totalQuantity?: number;
  /**
   * @remarks
   * The usage rate of the deduction plan.
   * 
   * @example
   * 0.5
   */
  usagePercentage?: number;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 123745698925000
   */
  userId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test@aliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  /**
   * @remarks
   * The code of the zone.
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      imageType: 'ImageType',
      instanceSpec: 'InstanceSpec',
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      quantity: 'Quantity',
      region: 'Region',
      regionNo: 'RegionNo',
      reservationCost: 'ReservationCost',
      resourceInstanceId: 'ResourceInstanceId',
      savedCost: 'SavedCost',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      totalQuantity: 'TotalQuantity',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      imageType: 'string',
      instanceSpec: 'string',
      postpaidCost: 'string',
      potentialSavedCost: 'string',
      quantity: 'number',
      region: 'string',
      regionNo: 'string',
      reservationCost: 'string',
      resourceInstanceId: 'string',
      savedCost: 'string',
      startTime: 'string',
      status: 'string',
      statusName: 'string',
      totalQuantity: 'number',
      usagePercentage: 'number',
      userId: 'string',
      userName: 'string',
      zone: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeResourceUsageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeResourceUsageDetailResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  /**
   * @remarks
   * The period.
   * 
   * @example
   * 2021071500
   */
  period?: string;
  /**
   * @remarks
   * The usage of resource plans.
   * 
   * @example
   * 0.1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      usagePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataTotalUsage extends $tea.Model {
  /**
   * @remarks
   * The total costs of pay-as-you-go instances.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The total potential savings.
   * 
   * @example
   * 100
   */
  potentialSavedCost?: number;
  /**
   * @remarks
   * The fee of purchased resource plans.
   * 
   * @example
   * 10
   */
  reservationCost?: number;
  /**
   * @remarks
   * The total savings.
   * 
   * @example
   * 100
   */
  savedCost?: number;
  /**
   * @remarks
   * The total usage of resource plans.
   * 
   * @example
   * 1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      reservationCost: 'ReservationCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postpaidCost: 'number',
      potentialSavedCost: 'number',
      reservationCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The usage of resource plans in the specified period.
   */
  periodCoverage?: DescribeResourceUsageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The total usage of resource plans.
   */
  totalUsage?: DescribeResourceUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeResourceUsageTotalResponseBodyDataTotalUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * 0.9
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The deducted amount.
   * 
   * @example
   * 100
   */
  deductAmount?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-05-05 15:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * spn-a1fhs54c243hP22
   */
  instanceId?: string;
  /**
   * @remarks
   * The specifications.
   * 
   * @example
   * 7th_generation_X86_group
   */
  instanceSpec?: string;
  /**
   * @example
   * 1906589291020438
   */
  ownerId?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The region.
   */
  region?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-05-05 14:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The total expenditure.
   * 
   * @example
   * 100
   */
  totalAmount?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 2831685687844416
   */
  userId?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * tester1@test.aliyun.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductAmount: 'DeductAmount',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      ownerId: 'OwnerId',
      postpaidCost: 'PostpaidCost',
      region: 'Region',
      startPeriod: 'StartPeriod',
      totalAmount: 'TotalAmount',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      currency: 'string',
      deductAmount: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      ownerId: 'number',
      postpaidCost: 'number',
      region: 'string',
      startPeriod: 'string',
      totalAmount: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeSavingsPlansCoverageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The token of the next page.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 400
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailResponseBodyDataItems },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * 1
   */
  percentage?: number;
  /**
   * @remarks
   * The period.
   * 
   * The value is in the format of yyyyMMddHH.
   * 
   * @example
   * 2021071500
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage extends $tea.Model {
  /**
   * @remarks
   * The total coverage.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The total deducted amount.
   * 
   * @example
   * 100
   */
  deductAmount?: number;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      deductAmount: 'DeductAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      deductAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The coverage in different periods.
   */
  periodCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The coverage summary.
   */
  totalCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The used amount of the savings plan.
   * 
   * @example
   * 3.94
   */
  deductValue?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-08-09 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * spn-a1fhs54c243hP22
   */
  instanceId?: string;
  /**
   * @remarks
   * The total amount of the savings plan.
   * 
   * @example
   * 29.84
   */
  poolValue?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 4.2
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The amount that is saved.
   * 
   * @example
   * 0.08
   */
  savedCost?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * A value of -1 indicates that the payment is overdue. A value of 1 indicates that the instance is active.
   * 
   * @example
   * -1
   */
  status?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values: universal and ECS compute.
   */
  type?: string;
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 0.9
   */
  usagePercentage?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 123745698925000
   */
  userId?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test13@test.aliyun.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deductValue: 'DeductValue',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      startPeriod: 'StartPeriod',
      status: 'Status',
      type: 'Type',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deductValue: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      startPeriod: 'string',
      status: 'string',
      type: 'string',
      usagePercentage: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeSavingsPlansUsageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The token of the next page.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2ldhsSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageDetailResponseBodyDataItems },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 1
   */
  percentage?: number;
  /**
   * @remarks
   * The period.
   * 
   * The value is in the format of yyyyMMddHH.
   * 
   * @example
   * 2021041500
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage extends $tea.Model {
  /**
   * @remarks
   * The total amount of the savings plan.
   * 
   * @example
   * 100
   */
  poolValue?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The amount that is saved.
   * 
   * @example
   * 100
   */
  savedCost?: number;
  /**
   * @remarks
   * The total usage.
   * 
   * @example
   * 1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The usage in different periods.
   */
  periodCoverage?: DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The usage summary.
   */
  totalUsage?: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequestTagFilter extends $tea.Model {
  /**
   * @remarks
   * The TagFilter.N parameter is used to query bills that match a specified tag. The value of the TagFilter.N parameter must be a key-value pair. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * *   If only the TagFilter.N.TagKey parameter is specified, all bills associated with the tag key are queried.
   * *   If you specify multiple tag key-value pairs at the same time, bills that meet any one of the tag key-value pairs are queried.
   * *   If the tags added to resources change, you can query only the bills that are generated within the period in which the tags and resources are associated.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * You can specify the TagValues.N parameter to query bills that match the specified tag value. The value of the TagValues.N parameter must be a string. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * *   If you specify the TagValues.N parameter, the TagFilter.N.TagKey parameter is required. Otherwise, the error message InvalidParameter.TagValues is returned.
   * *   If you specify multiple tag values, split bills that match one of the tag values are queried.
   * 
   * @example
   * TestValue
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The amount deducted with credit refund.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185xxxx3489
   */
  billAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The billing date. Format: YYYY-MM-DD. This parameter is not supported.
   * 
   * @example
   * 2020-01-20
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item.
   * 
   * @example
   * Bandwidth
   */
  billingItem?: string;
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * disk
   */
  billingItemCode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The type of the business.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The code is the same as that displayed in the Split Bill module of the User Center console.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of currency. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted with vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted with coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted with prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted with resource plans.
   * 
   * @example
   * 0
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * CPU:12
   */
  instanceConfig?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ecs.sn1ne.3xlarge
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill. Valid values: SubscriptionOrder: the subscription bill. PayAsYouGoBill: the pay-as-you-go bill. Refund: the refund. Adjustment: the adjustment bill.
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  itemName?: string;
  /**
   * @remarks
   * The unit price.
   * 
   * @example
   * 0.12
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price.
   * 
   * @example
   * CNY/GB
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * nick
   */
  nickName?: string;
  /**
   * @remarks
   * The amount that is unsettled.
   * 
   * @example
   * 0.1
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the account that owns the resource. This parameter is returned in multi-account scenario.
   * 
   * @example
   * 169***013
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is included.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that displayed in the Split Bill module of the User Center console.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The duration of the service.
   * 
   * @example
   * 20
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the service duration.
   * 
   * @example
   * Hour
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The ID of the account to which the split bill belongs.
   * 
   * @example
   * 12**122
   */
  splitAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the split item belongs.
   * 
   * @example
   * test**1122
   */
  splitAccountName?: string;
  /**
   * @remarks
   * The billing cycle in which the bill is split.
   * 
   * @example
   * 2021-06
   */
  splitBillingCycle?: string;
  /**
   * @remarks
   * The day on which the bill is split.
   * 
   * @example
   * 2021-06-01
   */
  splitBillingDate?: string;
  /**
   * @remarks
   * The code of the split item.
   * 
   * @example
   * rds
   */
  splitCommodityCode?: string;
  /**
   * @remarks
   * The ID of the split item.
   * 
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  splitProductDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: the subscription billing method. PayAsYouGo: the pay-as-you-go billing method.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag of the resource. If tags added to resources change, the bills generated during the period in which resources and tags are associated are returned.
   * 
   * @example
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @remarks
   * The amount of resource usage.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * Qingdao Zone B
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      billingType: 'BillingType',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      itemName: 'ItemName',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
      splitBillingDate: 'SplitBillingDate',
      splitCommodityCode: 'SplitCommodityCode',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      billingType: 'string',
      bizType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      itemName: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
      splitBillingDate: 'string',
      splitCommodityCode: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxx3489
   */
  accountID?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bill.
   */
  items?: DescribeSplitItemBillResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for the next query. If this parameter is empty, all the results are returned. When you perform the next query, you must set the NextToken parameter to this value.
   * 
   * @example
   * CAESEgoQCg4K
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: { 'type': 'array', 'itemType': DescribeSplitItemBillResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as a member.
   * 
   * @example
   * ID of the Alibaba Cloud account that is used as a member
   */
  childUserId?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was terminated.
   * 
   * @example
   * 2021-12-01
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was modified.
   * 
   * @example
   * 2021-12-01
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the financial relationship.
   * 
   * @example
   * ID of the financial relationship
   */
  id?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * ID of the Alibaba Cloud account that is used as the management account
   */
  parentUserId?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was established.
   * 
   * @example
   * 2021-11-01
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the financial relationship between the management account and the member.
   * 
   * - RELATED 【Association established】
   * - CONFIRMING 【To be confirmed by the other party】
   * - REJECTED 【Refused by the other party】
   * - CONNECTION_CANCELED 【Financial sub-account cancel request】
   * - CONNECTION_MASTER_CANCEL 【Financial master account cancel invitation】
   * - CHANGE_CONFIRMING 【Relationship change to be confirmed】
   * - INITIAL 【Initial new relationship status】
   * 
   * @example
   * RELATED
   */
  status?: string;
  /**
   * @remarks
   * The type of the financial relationship.
   * 
   * @example
   * enterprise_group
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      id: 'Id',
      parentUserId: 'ParentUserId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      endTime: 'number',
      gmtModified: 'number',
      id: 'number',
      parentUserId: 'number',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the account. A value of 1 indicates an enterprise account. A value of 0 indicates an individual account.
   * 
   * @example
   * 1
   */
  accountType?: string;
  /**
   * @remarks
   * The business status of the customer. Valid values:
   * 
   * Freeze: The business is frozen.
   * 
   * Thaw: The business is unfrozen.
   * 
   * Trusteeship: The business is hosted.
   * 
   * TrusteeshipCancel: The business is not hosted.
   * 
   * @example
   * Freeze
   */
  creditLimitStatus?: string;
  /**
   * @remarks
   * The hosting status of the credit information and instances of the customer. If the credit information and instances of the customer are managed on Alibaba Cloud, Alibaba Cloud suspends a customer service upon overdue payment. Valid values:
   * 
   * FREEZE: The business of the customer is frozen.
   * 
   * TRUSTEESHIP: The business of the customer is hosted.
   * 
   * @example
   * FREEZE
   */
  hostingStatus?: string;
  /**
   * @remarks
   * Indicates whether the account passes the real-name verification.
   * 
   * @example
   * true
   */
  isCertified?: boolean;
  /**
   * @remarks
   * The email address of the customer.
   * 
   * @example
   * xxxx@aliyun.com
   */
  loginEmail?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 1051360339779133
   */
  mpk?: number;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      creditLimitStatus: 'CreditLimitStatus',
      hostingStatus: 'HostingStatus',
      isCertified: 'IsCertified',
      loginEmail: 'LoginEmail',
      mpk: 'Mpk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      creditLimitStatus: 'string',
      hostingStatus: 'string',
      isCertified: 'boolean',
      loginEmail: 'string',
      mpk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The list of customer IDs.
   */
  uidList?: string[];
  static names(): { [key: string]: string } {
    return {
      uidList: 'UidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties extends $tea.Model {
  attrApiCode?: string;
  moduleApiCode?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attrApiCode: 'AttrApiCode',
      moduleApiCode: 'ModuleApiCode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrApiCode: 'string',
      moduleApiCode: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties extends $tea.Model {
  billModuleProperties?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties[];
  static names(): { [key: string]: string } {
    return {
      billModuleProperties: 'billModuleProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModuleProperties: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig extends $tea.Model {
  apiCode?: string;
  billModuleProperties?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties;
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiCode: 'ApiCode',
      billModuleProperties: 'BillModuleProperties',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCode: 'string',
      billModuleProperties: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties,
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig extends $tea.Model {
  billModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig[];
  static names(): { [key: string]: string } {
    return {
      billModuleConfig: 'billModuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModuleConfig: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties extends $tea.Model {
  code?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties extends $tea.Model {
  moduleProperties?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties[];
  static names(): { [key: string]: string } {
    return {
      moduleProperties: 'moduleProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleProperties: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig extends $tea.Model {
  code?: string;
  moduleProperties?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      moduleProperties: 'ModuleProperties',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleProperties: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig extends $tea.Model {
  originalModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig[];
  static names(): { [key: string]: string } {
    return {
      originalModuleConfig: 'originalModuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalModuleConfig: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrder extends $tea.Model {
  /**
   * @remarks
   * The after-tax amount of the order.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: string;
  billModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configurations of the main service.
   * 
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  config?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The order extension information.
   */
  extendInfos?: { [key: string]: string };
  /**
   * @remarks
   * The instance IDs.
   * 
   * @example
   * ["rm-bp1a2vsr018313t6o"]
   */
  instanceIDs?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user who performs operations on the order. If no RAM user is involved, leave this parameter blank.
   * 
   * @example
   * 23424243432
   */
  operator?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 3453425324
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the suborder. Valid values:
   * 
   * *   ProductSubOrder: the service suborder
   * *   RefundSubOrder: the refund suborder
   * 
   * @example
   * ProductSubOrder
   */
  orderSubType?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   New: purchases an instance.
   * *   Renew: renews an instance.
   * *   Upgrade: upgrades the configurations of an instance.
   * *   Refund: applies for a refund.
   * *   Convert: switches the billing method.
   * *   Downgrade: downgrades the configurations of an instance.
   * *   ResizeDisk: resizes the disk.
   * 
   * @example
   * New
   */
  orderType?: string;
  /**
   * @remarks
   * The module information without standardized conversion.
   * 
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  originalConfig?: string;
  originalModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig;
  /**
   * @remarks
   * The currency of payment.
   * 
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The status of payment. Valid values:
   * 
   * *   Unpaid: The order is not paid.
   * *   Paid: The order is paid.
   * *   Cancelled: The order is canceled.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The time of payment.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @remarks
   * The pretax amount of the order.
   * 
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The pretax amount of the order in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @remarks
   * The pretax gross amount of the order.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @remarks
   * The code of the main service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the main service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The number of main services.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the associated order.
   * 
   * @example
   * 4353453534543
   */
  relatedOrderId?: string;
  /**
   * @remarks
   * The ID of the suborder.
   * 
   * @example
   * 234343
   */
  subOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax of the order.
   * 
   * @example
   * 1
   */
  tax?: string;
  /**
   * @remarks
   * The time when the service ends.
   * 
   * @example
   * 2117-06-08T16:00:00Z
   */
  usageEndTime?: string;
  /**
   * @remarks
   * The time when the service starts.
   * 
   * @example
   * 2017-06-08T16:00:00Z
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      billModuleConfig: 'BillModuleConfig',
      commodityCode: 'CommodityCode',
      config: 'Config',
      createTime: 'CreateTime',
      currency: 'Currency',
      extendInfos: 'ExtendInfos',
      instanceIDs: 'InstanceIDs',
      operator: 'Operator',
      orderId: 'OrderId',
      orderSubType: 'OrderSubType',
      orderType: 'OrderType',
      originalConfig: 'OriginalConfig',
      originalModuleConfig: 'OriginalModuleConfig',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      relatedOrderId: 'RelatedOrderId',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      billModuleConfig: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig,
      commodityCode: 'string',
      config: 'string',
      createTime: 'string',
      currency: 'string',
      extendInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instanceIDs: 'string',
      operator: 'string',
      orderId: 'string',
      orderSubType: 'string',
      orderType: 'string',
      originalConfig: 'string',
      originalModuleConfig: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig,
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      quantity: 'string',
      region: 'string',
      relatedOrderId: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
      usageEndTime: 'string',
      usageStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderList extends $tea.Model {
  order?: GetOrderDetailResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The details of the order.
   */
  orderList?: GetOrderDetailResponseBodyDataOrderList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: GetOrderDetailResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequestModuleList extends $tea.Model {
  /**
   * @remarks
   * The configuration of the Nth pricing module. Valid values of N: 1 to 50. Format: AA:aa,BB:bb. The values of AA and BB are the property IDs of the pricing module. The values of aa and bb are the property values of the pricing module.
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the configuration parameters of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType:ecs.g5.xlarge,IoOptimized:IoOptimized,ImageOs:linux
   */
  config?: string;
  /**
   * @remarks
   * The code of the Nth pricing module.
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the module code.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The price type of the Nth pricing module. Valid values:
   * 
   * *   Hour: hourly price
   * *   Usage: usage price
   * *   Month: monthly price
   * *   Year: annual price
   * 
   * >  You can call the [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html) operation to obtain the configuration parameters of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 100
   */
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 20
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1.77
   */
  originalCost?: number;
  /**
   * @remarks
   * The unit price.
   * 
   * @example
   * 0
   */
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
      unitPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetails extends $tea.Model {
  moduleDetail?: GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail extends $tea.Model {
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * This discount allows you to use a service at the minimum price and is provided for testing purposes only.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the discount.
   * 
   * @example
   * 10200210
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the discount.
   * 
   * @example
   * This discount allows you to use a service at the minimum price and is provided for testing purposes only.
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetails extends $tea.Model {
  promotionDetail?: GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY: Chinese Yuan
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price details of the pricing module.
   */
  moduleDetails?: GetPayAsYouGoPriceResponseBodyDataModuleDetails;
  /**
   * @remarks
   * The details of the discount.
   */
  promotionDetails?: GetPayAsYouGoPriceResponseBodyDataPromotionDetails;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      moduleDetails: 'ModuleDetails',
      promotionDetails: 'PromotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      moduleDetails: GetPayAsYouGoPriceResponseBodyDataModuleDetails,
      promotionDetails: GetPayAsYouGoPriceResponseBodyDataPromotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyDataPromotionsPromotion extends $tea.Model {
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 1000680914
   */
  id?: number;
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * A discount of 17% is offered if you purchase a resource plan for six months.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyDataPromotions extends $tea.Model {
  promotion?: GetResourcePackagePriceResponseBodyDataPromotionsPromotion[];
  static names(): { [key: string]: string } {
    return {
      promotion: 'Promotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotion: { 'type': 'array', 'itemType': GetResourcePackagePriceResponseBodyDataPromotionsPromotion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discounted amount. Unit: CNY.
   * 
   * @example
   * 215040
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price. Unit: CNY.
   * 
   * @example
   * 1290240
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the discount.
   */
  promotions?: GetResourcePackagePriceResponseBodyDataPromotions;
  /**
   * @remarks
   * The price at which the transaction is made. Unit: CNY.
   * 
   * @example
   * 1075200
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      promotions: GetResourcePackagePriceResponseBodyDataPromotions,
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequestModuleList extends $tea.Model {
  /**
   * @remarks
   * The configurations of the Nth pricing module. Valid values of N: 1 to 50. Format: AA:aa,BB:bb. The values of AA and BB are the property IDs of the pricing module. The values of aa and bb are the property values of the pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageCode:version_1
   */
  config?: string;
  /**
   * @remarks
   * The identifier of the Nth pricing module.
   * 
   * This parameter is required.
   * 
   * @example
   * PackageCode
   */
  moduleCode?: string;
  /**
   * @remarks
   * The status of the pricing module. This parameter is required only if the order type is Upgrade. Valid values:
   * 
   * *   1: adds one or more instances.
   * *   2: modifies the configurations of an instance. In the upgrade scenario, if the configurations of the pricing module change, you must specify this value for the parameter.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  moduleStatus?: number;
  /**
   * @remarks
   * The tag of the specified resource. This parameter is required only if you upgrade or modify the configurations of an Alibaba Cloud service. For example, if you want to modify the configurations of a disk, you can use a tag to identify the ID of the disk.
   * 
   * @example
   * 213213123
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      moduleStatus: 'ModuleStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      moduleStatus: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0
   */
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 100
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The identifier of the pricing module.
   * 
   * @example
   * PackageCode
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original price of the service.
   * 
   * @example
   * 200
   */
  originalCost?: number;
  /**
   * @remarks
   * The unit price.
   * 
   * @example
   * 0
   */
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
      unitPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetails extends $tea.Model {
  moduleDetail?: GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail extends $tea.Model {
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * test
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the discount.
   * 
   * @example
   * 1021199213
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the discount.
   * 
   * @example
   * test
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataPromotionDetails extends $tea.Model {
  promotionDetail?: GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of currency. Valid values:
   * 
   * *   CNY: Chinese Yuan
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 100
   */
  discountPrice?: number;
  /**
   * @remarks
   * The price details of the pricing module.
   */
  moduleDetails?: GetSubscriptionPriceResponseBodyDataModuleDetails;
  /**
   * @remarks
   * The original price of the service.
   * 
   * @example
   * 900
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the discount.
   */
  promotionDetails?: GetSubscriptionPriceResponseBodyDataPromotionDetails;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      moduleDetails: 'ModuleDetails',
      originalPrice: 'OriginalPrice',
      promotionDetails: 'PromotionDetails',
      quantity: 'Quantity',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      moduleDetails: GetSubscriptionPriceResponseBodyDataModuleDetails,
      originalPrice: 'number',
      promotionDetails: GetSubscriptionPriceResponseBodyDataPromotionDetails,
      quantity: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY. CNY: Chinese Yuan. USD: United States dollar. JPY: Japanese Yen.
   */
  currency?: string;
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1etb69sqxgl4*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The refundable amount.
   * 
   * @example
   * 12.34
   */
  refundAmount?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      refundAmount: 'RefundAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      hostId: 'string',
      instanceId: 'string',
      refundAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * HostId
   * 
   * @example
   * HostId
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitRequestUnitEntityList extends $tea.Model {
  /**
   * @remarks
   * The new name of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * newTest
   */
  newUnitName?: string;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1321312312
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 2524352
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      newUnitName: 'NewUnitName',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUnitName: 'string',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cost center was modified.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 823756287
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 356349875
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequestParameter extends $tea.Model {
  /**
   * @remarks
   * The code of the parameter n. Valid values of n: 1 to 100. Multiple parameters are concatenated in the order of n.
   * 
   * >  Only the parameters of the attributes that you want to modify for the instance must be configured. For example, if the instance has Attribute A and Attribute B and only Attribute A must be modified, configure only the parameter of Attribute A.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  code?: string;
  /**
   * @remarks
   * The value of the parameter n. Valid values of n: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * testId
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the order that was created.
   * 
   * @example
   * 202653252354351
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The available balance of the account.
   * 
   * @example
   * 10000.00
   */
  availableAmount?: string;
  /**
   * @remarks
   * The available balance in cash.
   * 
   * @example
   * 10000.00
   */
  availableCashAmount?: string;
  /**
   * @remarks
   * The credit balance of the account.
   * 
   * @example
   * 0.00
   */
  creditAmount?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY: Chinese Yuan
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The credit line controlled by MYbank.
   * 
   * @example
   * 0.00
   */
  mybankCreditAmount?: string;
  /**
   * @remarks
   * The quota limit for eco customers.
   * 
   * @example
   * 10000.00
   */
  quotaLimit?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCashAmount: 'AvailableCashAmount',
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      mybankCreditAmount: 'MybankCreditAmount',
      quotaLimit: 'QuotaLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCashAmount: 'string',
      creditAmount: 'string',
      currency: 'string',
      mybankCreditAmount: 'string',
      quotaLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 1857xxxxx489
   */
  billAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The billing date.
   * 
   * @example
   * 2021-03-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY
   * *   USD
   * *   JPY
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The unsettled amount or the amount settled with credits.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 325434254
   */
  ownerID?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * aligzncloudtest2
   */
  ownerName?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is included.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The service code is consistent with that displayed in User Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * > A value is returned only if the **IsGroupByProduct** parameter is set to true.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * > A value is returned only if the **IsGroupByProduct** parameter is set to true.
   * 
   * @example
   * rds
   */
  productName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * > A value is returned only if the IsGroupByProduct parameter is set to true.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      ownerName: 'OwnerName',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      bizType: 'string',
      cashAmount: 'number',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      outstandingAmount: 'number',
      ownerID: 'string',
      ownerName: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productName: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItems extends $tea.Model {
  item?: QueryAccountBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryAccountBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 1857xxxxx489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QueryAccountBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryAccountBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  /**
   * @remarks
   * The amount of the transaction.
   * 
   * @example
   * 1.00
   */
  amount?: string;
  /**
   * @remarks
   * The balance of the account.
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @remarks
   * The type of transaction payment. Valid values:
   * 
   * Cash: pay for the transaction in cash. Deposit: pay for the transaction with deposit. RegularBankCreditRefund: pay for the transaction with credit refund controlled by a bank. DirectPay: directly pay for the transaction.
   * 
   * @example
   * Cash
   */
  fundType?: string;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 2022120336190912
   */
  recordID?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Test
   */
  remarks?: string;
  /**
   * @remarks
   * The transaction account.
   * 
   * @example
   * fortune_test@xxx.com
   */
  transactionAccount?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 123232434343532
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * Indicates whether the transaction is of the income type or the expenditure type. If one of the following types is specified, results for the specific type are returned. If the type that you specified for the parameter does not belong to the following types, no result is returned. If the parameter is left empty, results for transactions of the income and expenditure types are all returned. Valid values:
   * 
   * Income and Expense.
   * 
   * @example
   * Income
   */
  transactionFlow?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 43342334
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The time when the transaction was made.
   * 
   * @example
   * 2022-10-01
   */
  transactionTime?: string;
  /**
   * @remarks
   * The type of the transaction. If one of the following transaction types is specified, results for the specified transaction type are returned. If the transaction type that you specified does not belong to the following transaction types, no result is returned. If the parameter is left empty, results for all transaction types are returned. Valid values:
   * 
   * Payment, Withdraw, Refund, Consumption, Transfer, and Adjust.
   * 
   * @example
   * Consumption
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      balance: 'Balance',
      billingCycle: 'BillingCycle',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      transactionAccount: 'TransactionAccount',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      balance: 'string',
      billingCycle: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      transactionAccount: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList extends $tea.Model {
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * yidi
   */
  accountName?: string;
  /**
   * @remarks
   * The details of the transactions within the account.
   */
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for paging.
   * 
   * @example
   * ASHDADS
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList,
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 0
   */
  amount?: string;
  /**
   * @remarks
   * The balance of the account.
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The type of transaction payment. Valid values:
   * 
   * *   Cash: pay for the transaction in cash.
   * *   Deposit: pay for the transaction with deposit.
   * *   RegularBankCreditRefund: pay for the transaction with credit refund controlled by a bank.
   * *   DirectPay: directly pay for the transaction.
   * 
   * @example
   * Cash
   */
  fundType?: string;
  /**
   * @remarks
   * The number of the order or bill.
   * 
   * @example
   * 2020030242
   */
  recordID?: string;
  /**
   * @remarks
   * The remarks on the transaction.
   * 
   * @example
   * NAT_GW
   */
  remarks?: string;
  /**
   * @remarks
   * The transaction account. For example, the account is a recharge account in Alipay or a transfer account.
   * 
   * @example
   * 213562146
   */
  transactionAccount?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * *   AccountBalance
   * *   BankTransfer
   * *   Alipay
   * *   AntCreditPay
   * *   OfflineRemittance
   * *   RegularBankCreditRefund
   * *   CreditCard
   * *   MyBankCredit
   * *   HuaxiaBankCInstallment
   * *   ApplePay
   * 
   * @example
   * AccountBalance
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 1234354325
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The type of the transaction flow.
   * 
   * *   Income
   * *   Expense
   * 
   * @example
   * Expense
   */
  transactionFlow?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 43342334
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The time when the transaction was made.
   * 
   * @example
   * 2020-03-10T02:03:20Z
   */
  transactionTime?: string;
  /**
   * @remarks
   * The type of the transaction.
   * 
   * *   Payment
   * *   Withdraw
   * *   Refund
   * *   Consumption
   * *   Transfer
   * *   Adjust
   * 
   * @example
   * Consumption
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      balance: 'Balance',
      billingCycle: 'BillingCycle',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      transactionAccount: 'TransactionAccount',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      balance: 'string',
      billingCycle: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      transactionAccount: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsList extends $tea.Model {
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The name of your Alibaba Cloud account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The information about transactions.
   */
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionsResponseBodyDataAccountTransactionsList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyDataInstanceList extends $tea.Model {
  /**
   * @remarks
   * The time when the specified instance was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was expired.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the specified instance was expected to be released.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  expectedReleaseTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1049056
   */
  instanceID?: string;
  /**
   * @remarks
   * The ID of the instance owner.
   * 
   * @example
   * 325352345
   */
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the instance was released.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The renewal status of the specified instance. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * @example
   * ManualRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The number of auto-renewal cycles.
   * 
   * @example
   * 1
   */
  renewalDuration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal cycle. Valid values:
   * 
   * *   M: month
   * *   Y: year
   * 
   * @example
   * M
   */
  renewalDurationUnit?: string;
  /**
   * @remarks
   * The seller.
   * 
   * @example
   * 123123123
   */
  seller?: string;
  /**
   * @remarks
   * The ID of the seller.
   * 
   * @example
   * 123123123
   */
  sellerId?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Creating: The instance is being created. WaitForExpire: The instance is about to expire. Normal: The instance can properly run. Expired: The instance is expired.
   */
  status?: string;
  /**
   * @remarks
   * The time when the specified instance was suspended.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The sub-status of the specified instance.
   * 
   * @example
   * Normal: The pay-as-you-go module can properly run. WaitForLimit: The pay-as-you-go module is about to be limited due to overdue payments. BandwidthLimited: The pay-as-you-go module is limited due to overdue payments.
   */
  subStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      expectedReleaseTime: 'ExpectedReleaseTime',
      instanceID: 'InstanceID',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      renewStatus: 'RenewStatus',
      renewalDuration: 'RenewalDuration',
      renewalDurationUnit: 'RenewalDurationUnit',
      seller: 'Seller',
      sellerId: 'SellerId',
      status: 'Status',
      stopTime: 'StopTime',
      subStatus: 'SubStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      expectedReleaseTime: 'string',
      instanceID: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      releaseTime: 'string',
      renewStatus: 'string',
      renewalDuration: 'number',
      renewalDurationUnit: 'string',
      seller: 'string',
      sellerId: 'number',
      status: 'string',
      stopTime: 'string',
      subStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The instances returned.
   */
  instanceList?: QueryAvailableInstancesResponseBodyDataInstanceList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': QueryAvailableInstancesResponseBodyDataInstanceList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The amount paid after tax is deducted.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: number;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the currency.
   * 
   * *   CNY
   * *   USD
   * *   JPY
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill.
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * SubscriptionOrder
   */
  item?: string;
  /**
   * @remarks
   * The unsettled amount of the bill.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member. This parameter is returned in a multi-account payment scenario.
   * 
   * @example
   * 3532535235
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid with cash.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The currency used for payment.
   * 
   * @example
   * USD
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The time when the order was paid.
   * 
   * @example
   * 2020-03-11 08:00:00
   */
  paymentTime?: string;
  /**
   * @remarks
   * The ID of the transaction.
   * 
   * @example
   * 2O3AADJFEAF2PDKSFAMFCB11918
   */
  paymentTransactionID?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount
   * 
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax amount paid in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS (subscription)
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 2020xxxx5912
   */
  recordID?: string;
  /**
   * @remarks
   * The round down discount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @remarks
   * The payment status of the bill. Valid values:
   * 
   * *   PayFinish: The bill is paid.
   * *   PayUnclear: The bill is not cleared.
   * *   PayUnsettle: The bill is not settled.
   * *   NoSettle: The bill is free of settlement.
   * 
   * @example
   * PayFinish
   */
  status?: string;
  /**
   * @remarks
   * The ID of the order corresponding to the bill.
   * 
   * @example
   * 325345254353
   */
  subOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax.
   * 
   * @example
   * 0
   */
  tax?: number;
  /**
   * @remarks
   * The time when the bill ends.
   * 
   * @example
   * 2020-03-11 08:00:00
   */
  usageEndTime?: string;
  /**
   * @remarks
   * The time when the bill starts.
   * 
   * @example
   * 2020-03-11 07:00:00
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      paymentTransactionID: 'PaymentTransactionID',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      recordID: 'RecordID',
      roundDownDiscount: 'RoundDownDiscount',
      status: 'Status',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      cashAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      paymentTransactionID: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      recordID: 'string',
      roundDownDiscount: 'string',
      status: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItems extends $tea.Model {
  item?: QueryBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxxx489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * @example
   * 2020-02
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QueryBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The amount paid after the tax is deducted.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185766xxxx
   */
  billAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The commodity code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY
   * *   USD
   * *   JPY
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill. Valid values:
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The unsettled amount or the amount deducted by using credits. This may be an unsettled amount of a regular user or credits consumed by a credit user.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the bill owner.
   * 
   * @example
   * 1222
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is included.
   * 
   * @example
   * 100
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The currency used for payment.
   * 
   * @example
   * USD
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The code of the service. The service code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax amount paid in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 100
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * NAT Gateway (Pay-As-You-Go)
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * NAT Gateway
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The round down discount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax.
   * 
   * @example
   * 0
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      bizType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      roundDownDiscount: 'string',
      subscriptionType: 'string',
      tax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItems extends $tea.Model {
  item?: QueryBillOverviewResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillOverviewResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QueryBillOverviewResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryBillOverviewResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The owner ID of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * 1369168081849304
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The path in the OSS bucket.
   * 
   * @example
   * Billing/BillingItemDetailMonthly/
   */
  bucketPath?: string;
  /**
   * @remarks
   * The maximum number of data rows in a single file. If the number of data rows in a bill exceeds the upper limit, the bill is split into multiple files. Then, multiple files are merged and compressed into a package.
   * 
   * @example
   * 300000
   */
  rowLimitPerFile?: number;
  /**
   * @remarks
   * The ID of the OSS bucket that stores the subscribed bill.
   * 
   * @example
   * billingtestbucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The code of the language.
   * 
   * Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  subscribeLanguage?: string;
  /**
   * @remarks
   * The time when the subscribed bill was stored in the OSS bucket. The time is displayed in the YYYY-MM-DD hh:mm:ss format.
   * 
   * @example
   * 2019-10-30 15:40:11
   */
  subscribeTime?: string;
  /**
   * @remarks
   * The type of the subscribed bill. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: the bill of a billable item.
   * *   InstanceDetailForBillingPeriod: the bill of an instance.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeLanguage: 'SubscribeLanguage',
      subscribeTime: 'SubscribeTime',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketOwnerId: 'number',
      bucketPath: 'string',
      rowLimitPerFile: 'number',
      subscribeBucket: 'string',
      subscribeLanguage: 'string',
      subscribeTime: 'string',
      subscribeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItems extends $tea.Model {
  item?: QueryBillToOSSSubscriptionResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillToOSSSubscriptionResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account used to perform the query.
   * 
   * @example
   * 185xxxxx03489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account used to perform the query.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The details of the subscribed bill.
   */
  items?: QueryBillToOSSSubscriptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: QueryBillToOSSSubscriptionResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBodyDataCashCoupon extends $tea.Model {
  /**
   * @remarks
   * The service to which the voucher is applicable.
   * 
   * @example
   * All Alibaba Cloud services
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The scenario to which the voucher is applicable.
   * 
   * @example
   * Pay for the pay-as-you-go bills of Alibaba Cloud services or purchase an instance of an Alibaba Cloud service
   */
  applicableScenarios?: string;
  /**
   * @remarks
   * The remaining quota of the voucher.
   * 
   * @example
   * 100.00
   */
  balance?: string;
  /**
   * @remarks
   * The ID of the voucher.
   * 
   * @example
   * 34534253254325
   */
  cashCouponId?: number;
  /**
   * @remarks
   * The code of the voucher.
   * 
   * @example
   * Q-b1485def8f04a
   */
  cashCouponNo?: string;
  /**
   * @remarks
   * The description of the voucher.
   * 
   * @example
   * This voucher is used for testing product function
   */
  description?: string;
  /**
   * @remarks
   * The time when the voucher took effect.
   * 
   * @example
   * 2018-08-02T15:15:50Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the voucher expired.
   * 
   * @example
   * 2019-01-29T15:15:50Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the voucher was released.
   * 
   * @example
   * 2018-08-02T15:15:50Z
   */
  grantedTime?: string;
  /**
   * @remarks
   * The denomination of the voucher.
   * 
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
   * @remarks
   * The state of the voucher. Valid values:
   * 
   * *   Available: The voucher is valid.
   * *   Expired: The voucher has expired.
   * *   Cancelled: The voucher is canceled.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      cashCouponId: 'CashCouponId',
      cashCouponNo: 'CashCouponNo',
      description: 'Description',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      cashCouponId: 'number',
      cashCouponNo: 'string',
      description: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBodyData extends $tea.Model {
  cashCoupon?: QueryCashCouponsResponseBodyDataCashCoupon[];
  static names(): { [key: string]: string } {
    return {
      cashCoupon: 'CashCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashCoupon: { 'type': 'array', 'itemType': QueryCashCouponsResponseBodyDataCashCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBodyDataCommodityList extends $tea.Model {
  /**
   * @remarks
   * The payment type. Valid values: POSTPAY (pay-as-you-go) and PREPAY (subscription).
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The code of the service, which is the same as that on the Billing Management page.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ECS (Pay-As-You-Go)
   */
  commodityName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      commodityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the service.
   */
  commodityList?: QueryCommodityListResponseBodyDataCommodityList[];
  static names(): { [key: string]: string } {
    return {
      commodityList: 'CommodityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityList: { 'type': 'array', 'itemType': QueryCommodityListResponseBodyDataCommodityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyDataCostUnitDtoList extends $tea.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 2343464
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 23534
   */
  unitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cost centers.
   */
  costUnitDtoList?: QueryCostUnitResponseBodyDataCostUnitDtoList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': QueryCostUnitResponseBodyDataCostUnitDtoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnit extends $tea.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 321432
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * @example
   * 23421
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 123412
   */
  unitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo extends $tea.Model {
  /**
   * @remarks
   * The number of resource instances in the cost center.
   * 
   * @example
   * 1
   */
  resourceCount?: number;
  /**
   * @remarks
   * The number of resource groups in the cost center.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The number of sub-cost centers in the cost center.
   * 
   * @example
   * 2
   */
  subUnitCount?: number;
  /**
   * @remarks
   * The total number of resource instances, including resource instances of sub-cost centers, in the cost center.
   * 
   * @example
   * 3
   */
  totalResourceCount?: number;
  /**
   * @remarks
   * The total number of resource groups, including resource groups of sub-cost centers, in the cost center.
   * 
   * @example
   * 2
   */
  totalResourceGroupCount?: number;
  /**
   * @remarks
   * The total number of the associated accounts, including associated accounts of sub-cost centers, in the cost center.
   * 
   * @example
   * 2
   */
  totalUserCount?: number;
  /**
   * @remarks
   * The number of sub-cost centers in the cost center.
   * 
   * @example
   * 0
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceGroupCount: 'ResourceGroupCount',
      subUnitCount: 'SubUnitCount',
      totalResourceCount: 'TotalResourceCount',
      totalResourceGroupCount: 'TotalResourceGroupCount',
      totalUserCount: 'TotalUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceGroupCount: 'number',
      subUnitCount: 'number',
      totalResourceCount: 'number',
      totalResourceGroupCount: 'number',
      totalUserCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList extends $tea.Model {
  /**
   * @remarks
   * The split code of the resource.
   * 
   * @example
   * test
   */
  apportionCode?: string;
  /**
   * @remarks
   * The split name of the resource.
   * 
   * @example
   * test
   */
  apportionName?: string;
  /**
   * @remarks
   * The product code of the resource.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name of the resource.
   * 
   * @example
   * ApsaraDB
   */
  commodityName?: string;
  pipCode?: string;
  /**
   * @remarks
   * The resources related to the resource instance.
   * 
   * @example
   * oss
   */
  relatedResources?: string;
  /**
   * @remarks
   * The resource group to which the resource belongs.
   * 
   * @example
   * Default Resource Group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * @example
   * OSSBAG-cn-v0h1s4hma018
   */
  resourceId?: string;
  /**
   * @remarks
   * The custom name of the resource.
   * 
   * @example
   * testResource
   */
  resourceNick?: string;
  resourceSource?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * Available
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * @example
   * testResource
   */
  resourceTag?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_bj
   */
  resourceType?: string;
  /**
   * @remarks
   * The user ID of the resource owner.
   * 
   * @example
   * 2424242134
   */
  resourceUserId?: number;
  /**
   * @remarks
   * The username of the resource owner.
   * 
   * @example
   * test@test.aliyun.com
   */
  resourceUserName?: string;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      apportionName: 'ApportionName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      pipCode: 'PipCode',
      relatedResources: 'RelatedResources',
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      resourceNick: 'ResourceNick',
      resourceSource: 'ResourceSource',
      resourceStatus: 'ResourceStatus',
      resourceTag: 'ResourceTag',
      resourceType: 'ResourceType',
      resourceUserId: 'ResourceUserId',
      resourceUserName: 'ResourceUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      apportionName: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      pipCode: 'string',
      relatedResources: 'string',
      resourceGroup: 'string',
      resourceId: 'string',
      resourceNick: 'string',
      resourceSource: 'string',
      resourceStatus: 'string',
      resourceTag: 'string',
      resourceType: 'string',
      resourceUserId: 'number',
      resourceUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the cost center.
   */
  costUnit?: QueryCostUnitResourceResponseBodyDataCostUnit;
  /**
   * @remarks
   * The statistical information about the cost center.
   */
  costUnitStatisInfo?: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource instances.
   */
  resourceInstanceDtoList?: QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnit: 'CostUnit',
      costUnitStatisInfo: 'CostUnitStatisInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceInstanceDtoList: 'ResourceInstanceDtoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnit: QueryCostUnitResourceResponseBodyDataCostUnit,
      costUnitStatisInfo: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo,
      pageNum: 'number',
      pageSize: 'number',
      resourceInstanceDtoList: { 'type': 'array', 'itemType': QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress extends $tea.Model {
  /**
   * @remarks
   * The addressee.
   * 
   * @example
   * test
   */
  addressee?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * test
   */
  bizType?: string;
  /**
   * @remarks
   * The city to which the invoice is mailed.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The name of the district to which the invoice is mailed.
   * 
   * @example
   * Test District
   */
  county?: string;
  /**
   * @remarks
   * The detailed address to which the invoice is mailed. This parameter is returned after fields are concatenated.
   * 
   * @example
   * Test Address
   */
  deliveryAddress?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 311601051
   */
  id?: number;
  /**
   * @remarks
   * The phone number of the addressee.
   * 
   * @example
   * 138xxxxxxxx
   */
  phone?: string;
  /**
   * @remarks
   * The postcode.
   * 
   * @example
   * 000000
   */
  postalCode?: string;
  /**
   * @remarks
   * The province to which the invoice is mailed.
   * 
   * @example
   * Zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The name of the street to which the invoice is mailed.
   * 
   * @example
   * Test Street
   */
  street?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 4382956342857
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * testNick
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      addressee: 'Addressee',
      bizType: 'BizType',
      city: 'City',
      county: 'County',
      deliveryAddress: 'DeliveryAddress',
      id: 'Id',
      phone: 'Phone',
      postalCode: 'PostalCode',
      province: 'Province',
      street: 'Street',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressee: 'string',
      bizType: 'string',
      city: 'string',
      county: 'string',
      deliveryAddress: 'string',
      id: 'number',
      phone: 'string',
      postalCode: 'string',
      province: 'string',
      street: 'string',
      userId: 'number',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList extends $tea.Model {
  customerInvoiceAddress?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress[];
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddress: 'CustomerInvoiceAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddress: { 'type': 'array', 'itemType': QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details of addresses to which invoices are mailed.
   */
  customerInvoiceAddressList?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddressList: 'CustomerInvoiceAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddressList: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  /**
   * @remarks
   * The deduction date.
   * 
   * @example
   * 2019/5/23 12:00
   */
  deductDate?: string;
  /**
   * @remarks
   * The total computing capacity or storage capacity of the RI or SCU during the deduction.
   * 
   * @example
   * 1
   */
  deductFactorTotal?: number;
  /**
   * @remarks
   * The deduct factor. This parameter is returned only if the CommodityCode parameter is set to ecsRi.
   * 
   * @example
   * 24
   */
  deductHours?: number;
  /**
   * @remarks
   * The original measured amount.
   * 
   * @example
   * 1
   */
  deductMeasure?: number;
  /**
   * @remarks
   * The computing capacity or storage capacity that is deducted in a pay-as-you-go instance.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The code of the deducted service.
   * 
   * @example
   * rds
   */
  deductedCommodityCode?: string;
  /**
   * @remarks
   * The ID of the deducted instance.
   * 
   * @example
   * oss-123123
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The name of the deducted service.
   * 
   * @example
   * ApsaraDB RDS
   */
  deductedProductDetail?: string;
  /**
   * @remarks
   * The ID of the RI.
   * 
   * @example
   * oss-123123
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the deducted instance.
   * 
   * @example
   * rds.mysql.s3.large
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The region in which the instance resides. This parameter can be left empty.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The billable item.
   * 
   * @example
   * PutRequest
   */
  resCode?: string;
  /**
   * @remarks
   * The UID of the deducted instance.
   * 
   * *   If the deduction is shared, the value of this parameter indicates the UID of the deducted instance.
   * *   If the deduction is not shared, the value of this parameter is the same as that of the uid parameter.
   * 
   * @example
   * 1111111111
   */
  shareUid?: number;
  /**
   * @remarks
   * The UID of the deducted instance.
   * 
   * @example
   * 1111111111
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductMeasure: 'DeductMeasure',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      region: 'Region',
      resCode: 'ResCode',
      shareUid: 'ShareUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'number',
      deductMeasure: 'number',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      region: 'string',
      resCode: 'string',
      shareUid: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyDataDetailList extends $tea.Model {
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryDPUtilizationDetailResponseBodyDataDetailListDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The detailed resource plan usage.
   */
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can set the LastToken parameter to this value in the next request. If null is returned, all results are queried.
   * 
   * @example
   * CAESF***zNTAw
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryDPUtilizationDetailResponseBodyDataDetailList,
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateListEvaluate extends $tea.Model {
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 202002
   */
  billCycle?: string;
  /**
   * @remarks
   * The ID of the bill.
   * 
   * @example
   * 234543254325
   */
  billId?: number;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  bizTime?: string;
  /**
   * @remarks
   * The market type in the invoice. Valid values:
   * 
   * *   ALIYUN: Alibaba Cloud
   * *   MARKETPLACE: Alibaba Cloud Marketplace
   * 
   * @example
   * ALIYUN
   */
  bizType?: string;
  /**
   * @remarks
   * The invoiceable amount.
   * 
   * @example
   * 123213
   */
  canInvoiceAmount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the invoice.
   * 
   * @example
   * 1325321532
   */
  id?: number;
  /**
   * @remarks
   * The invoiced amount.
   * 
   * @example
   * 10000
   */
  invoicedAmount?: number;
  /**
   * @remarks
   * The ID of the item.
   * 
   * @example
   * 23453245
   */
  itemId?: number;
  /**
   * @remarks
   * The name of the object to be invoiced.
   * 
   * @example
   * Refund of a voucher with denomination marked
   */
  name?: string;
  /**
   * @remarks
   * If a refund is issued due to an order such as an unsubscription order or a configuration downgrade order, the refund amount is used to offset the amount of the invoice. The value is consistent with the value of the **OffsetCostAmount** parameter.
   * 
   * @example
   * 500
   */
  offsetAcceptAmount?: number;
  /**
   * @remarks
   * The refund amount used to offset the amount of the invoice. If a refund is issued due to an order such as an unsubscription order or a configuration downgrade order, the refund amount is used to offset the amount of the invoice. The value is consistent with the value of the **OffsetAcceptAmount** parameter.
   * 
   * @example
   * 500
   */
  offsetCostAmount?: number;
  /**
   * @remarks
   * The ID of the external object.
   * 
   * @example
   * 12341
   */
  opId?: string;
  /**
   * @remarks
   * The original amount.
   * 
   * @example
   * -10000
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * @example
   * 124324213421
   */
  outBizId?: string;
  /**
   * @remarks
   * The balance.
   * 
   * @example
   * -10000
   */
  presentAmount?: number;
  /**
   * @remarks
   * The status of the invoiceable amount.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of orders that are queried. Valid values:
   * 
   * *   1: the orders in which the invoiceable amount is negative.
   * *   2: the orders in which the invoiceable amount is positive.
   * *   3: the orders in which the invoiceable amount is not 0.
   * *   4: the orders in which the amount that has been invoiced is greater than 0.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all orders are queried.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 2738543
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      billId: 'BillId',
      bizTime: 'BizTime',
      bizType: 'BizType',
      canInvoiceAmount: 'CanInvoiceAmount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      invoicedAmount: 'InvoicedAmount',
      itemId: 'ItemId',
      name: 'Name',
      offsetAcceptAmount: 'OffsetAcceptAmount',
      offsetCostAmount: 'OffsetCostAmount',
      opId: 'OpId',
      originalAmount: 'OriginalAmount',
      outBizId: 'OutBizId',
      presentAmount: 'PresentAmount',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      billId: 'number',
      bizTime: 'string',
      bizType: 'string',
      canInvoiceAmount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoicedAmount: 'number',
      itemId: 'number',
      name: 'string',
      offsetAcceptAmount: 'number',
      offsetCostAmount: 'number',
      opId: 'string',
      originalAmount: 'number',
      outBizId: 'string',
      presentAmount: 'number',
      status: 'number',
      type: 'number',
      userId: 'number',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateList extends $tea.Model {
  evaluate?: QueryEvaluateListResponseBodyDataEvaluateListEvaluate[];
  static names(): { [key: string]: string } {
    return {
      evaluate: 'Evaluate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluate: { 'type': 'array', 'itemType': QueryEvaluateListResponseBodyDataEvaluateListEvaluate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  evaluateList?: QueryEvaluateListResponseBodyDataEvaluateList;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The invoiced amount that meets the query conditions. Unit: Cent.
   * 
   * @example
   * 12344
   */
  totalInvoiceAmount?: number;
  /**
   * @remarks
   * The invoiceable amount that meets the query conditions. Unit: Cent.
   * 
   * @example
   * 12344
   */
  totalUnAppliedInvoiceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluateList: 'EvaluateList',
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalInvoiceAmount: 'TotalInvoiceAmount',
      totalUnAppliedInvoiceAmount: 'TotalUnAppliedInvoiceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateList: QueryEvaluateListResponseBodyDataEvaluateList,
      hostId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalInvoiceAmount: 'number',
      totalUnAppliedInvoiceAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the financial account. A value of MASTER indicates that the account is a management account. A value of MEMBER indicates that the account is a member.
   * 
   * @example
   * MEMBER
   */
  accountType?: string;
  /**
   * @remarks
   * Indicates whether the account is a financial account. A value of true indicates that the account is a financial account. A value of false indicates that the account is not a financial account.
   * 
   * @example
   * true
   */
  isFinancialAccount?: boolean;
  /**
   * @remarks
   * The ID of the group to which the member belongs.
   * 
   * @example
   * 124
   */
  memberGroupId?: number;
  /**
   * @remarks
   * The name of the group to which the member belongs.
   * 
   * @example
   * Test group
   */
  memberGroupName?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * Test
   */
  memberNickName?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * killortop3
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      isFinancialAccount: 'IsFinancialAccount',
      memberGroupId: 'MemberGroupId',
      memberGroupName: 'MemberGroupName',
      memberNickName: 'MemberNickName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      isFinancialAccount: 'boolean',
      memberGroupId: 'number',
      memberGroupName: 'string',
      memberNickName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The billing date. This parameter is returned only if the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item. This parameter is returned only if the IsBillingItem parameter is set to true.
   * 
   * @example
   * Other
   */
  billingItem?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The commodity code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   CNY
   * *   USD
   * *   JPY
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted by using resource plans.
   * 
   * @example
   * NULL
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * CPU:12
   */
  instanceConfig?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * ecs.sn1ne.3xlarge
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill.
   * 
   * *   SubscriptionOrder: subscription order
   * *   PayAsYouGoBill: pay-as-you-go bill
   * *   Refund: refund
   * *   Adjustment: reconciliation
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The unit price. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * CNY
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The unsettled amount.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member account. This parameter is returned in a multi-account payment scenario.
   * 
   * @example
   * 169***013
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The service code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * China (Hangzhou)
   */
  region?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 10
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the validity period.
   * 
   * @example
   * Seconds
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * **
   * 
   * ****This parameter is returned together with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The usage of the billable item. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItems extends $tea.Model {
  item?: QueryInstanceBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryInstanceBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxx3489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bill.
   */
  items?: QueryInstanceBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryInstanceBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ecs
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponseBodyTagResourceTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponseBodyTagResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * spn-xxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The returned resource type indicates a savings plan instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QueryInstanceByTagResponseBodyTagResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResourceTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyDataModulesModule extends $tea.Model {
  accountingUnit?: string;
  /**
   * @example
   * SubscriptionOrder
   */
  billType?: string;
  /**
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  gaapPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxGrossAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPricingDiscount?: string;
  /**
   * @example
   * OSSBAG-cn-0xl0xxxxxx
   */
  instanceID?: string;
  /**
   * @example
   * 0.75
   */
  monthGaapDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  monthGaapDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  monthGaapDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  monthGaapPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  monthGaapPretaxAmount?: string;
  /**
   * @example
   * 0.99
   */
  monthGaapPretaxAmountLocal?: string;
  /**
   * @example
   * 0.99
   */
  monthGaapPretaxGrossAmount?: string;
  /**
   * @example
   * 0,.25
   */
  monthGaapPricingDiscount?: string;
  /**
   * @example
   * 213123213123
   */
  orderId?: string;
  /**
   * @example
   * New
   */
  orderType?: string;
  /**
   * @example
   * 123213123123
   */
  ownerID?: string;
  /**
   * @example
   * 2018-06-15 15:59:57
   */
  payTime?: string;
  /**
   * @example
   * 23534534
   */
  payerAccount?: string;
  /**
   * @example
   * 0
   */
  paymentAmount?: string;
  /**
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @example
   * 123
   */
  pretaxGrossAmount?: string;
  /**
   * @example
   * 1
   */
  pricingDiscount?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceGroup?: string;
  /**
   * @example
   * 12434345
   */
  subOrderId?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * tag
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  unallocatedDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  unallocatedDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  unallocatedDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  unallocatedPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxGrossAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPricingDiscount?: string;
  /**
   * @example
   * 2019-05-01 00:00:00
   */
  usageEndDate?: string;
  /**
   * @example
   * 2019-04-01 00:00:00
   */
  usageStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountingUnit: 'AccountingUnit',
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      gaapDeductedByCashCoupons: 'GaapDeductedByCashCoupons',
      gaapDeductedByCoupons: 'GaapDeductedByCoupons',
      gaapDeductedByPrepaidCard: 'GaapDeductedByPrepaidCard',
      gaapPaymentAmount: 'GaapPaymentAmount',
      gaapPretaxAmount: 'GaapPretaxAmount',
      gaapPretaxAmountLocal: 'GaapPretaxAmountLocal',
      gaapPretaxGrossAmount: 'GaapPretaxGrossAmount',
      gaapPricingDiscount: 'GaapPricingDiscount',
      instanceID: 'InstanceID',
      monthGaapDeductedByCashCoupons: 'MonthGaapDeductedByCashCoupons',
      monthGaapDeductedByCoupons: 'MonthGaapDeductedByCoupons',
      monthGaapDeductedByPrepaidCard: 'MonthGaapDeductedByPrepaidCard',
      monthGaapPaymentAmount: 'MonthGaapPaymentAmount',
      monthGaapPretaxAmount: 'MonthGaapPretaxAmount',
      monthGaapPretaxAmountLocal: 'MonthGaapPretaxAmountLocal',
      monthGaapPretaxGrossAmount: 'MonthGaapPretaxGrossAmount',
      monthGaapPricingDiscount: 'MonthGaapPricingDiscount',
      orderId: 'OrderId',
      orderType: 'OrderType',
      ownerID: 'OwnerID',
      payTime: 'PayTime',
      payerAccount: 'PayerAccount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      pricingDiscount: 'PricingDiscount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      unallocatedDeductedByCashCoupons: 'UnallocatedDeductedByCashCoupons',
      unallocatedDeductedByCoupons: 'UnallocatedDeductedByCoupons',
      unallocatedDeductedByPrepaidCard: 'UnallocatedDeductedByPrepaidCard',
      unallocatedPaymentAmount: 'UnallocatedPaymentAmount',
      unallocatedPretaxAmount: 'UnallocatedPretaxAmount',
      unallocatedPretaxAmountLocal: 'UnallocatedPretaxAmountLocal',
      unallocatedPretaxGrossAmount: 'UnallocatedPretaxGrossAmount',
      unallocatedPricingDiscount: 'UnallocatedPricingDiscount',
      usageEndDate: 'UsageEndDate',
      usageStartDate: 'UsageStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountingUnit: 'string',
      billType: 'string',
      billingCycle: 'string',
      currency: 'string',
      deductedByCashCoupons: 'string',
      deductedByCoupons: 'string',
      deductedByPrepaidCard: 'string',
      gaapDeductedByCashCoupons: 'string',
      gaapDeductedByCoupons: 'string',
      gaapDeductedByPrepaidCard: 'string',
      gaapPaymentAmount: 'string',
      gaapPretaxAmount: 'string',
      gaapPretaxAmountLocal: 'string',
      gaapPretaxGrossAmount: 'string',
      gaapPricingDiscount: 'string',
      instanceID: 'string',
      monthGaapDeductedByCashCoupons: 'string',
      monthGaapDeductedByCoupons: 'string',
      monthGaapDeductedByPrepaidCard: 'string',
      monthGaapPaymentAmount: 'string',
      monthGaapPretaxAmount: 'string',
      monthGaapPretaxAmountLocal: 'string',
      monthGaapPretaxGrossAmount: 'string',
      monthGaapPricingDiscount: 'string',
      orderId: 'string',
      orderType: 'string',
      ownerID: 'string',
      payTime: 'string',
      payerAccount: 'string',
      paymentAmount: 'string',
      paymentCurrency: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      pricingDiscount: 'string',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tag: 'string',
      unallocatedDeductedByCashCoupons: 'string',
      unallocatedDeductedByCoupons: 'string',
      unallocatedDeductedByPrepaidCard: 'string',
      unallocatedPaymentAmount: 'string',
      unallocatedPretaxAmount: 'string',
      unallocatedPretaxAmountLocal: 'string',
      unallocatedPretaxGrossAmount: 'string',
      unallocatedPricingDiscount: 'string',
      usageEndDate: 'string',
      usageStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyDataModules extends $tea.Model {
  module?: QueryInstanceGaapCostResponseBodyDataModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': QueryInstanceGaapCostResponseBodyDataModulesModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1.1.1.1
   */
  hostId?: string;
  modules?: QueryInstanceGaapCostResponseBodyDataModules;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      modules: 'Modules',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      modules: QueryInstanceGaapCostResponseBodyDataModules,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice extends $tea.Model {
  /**
   * @remarks
   * The type of invoice that was changed to.
   * 
   * @example
   * 1
   */
  adjustType?: number;
  /**
   * @remarks
   * The bank that issues the invoice.
   * 
   * @example
   * Test Bank
   */
  bank?: string;
  /**
   * @remarks
   * The bank account number.
   * 
   * @example
   * 389576348573296349853476
   */
  bankNo?: string;
  /**
   * @remarks
   * The authentication type of Alipay. Valid values:
   * 
   * *   1: individual
   * *   2: company
   * 
   * @example
   * 1
   */
  customerType?: number;
  /**
   * @remarks
   * The default note that is attached when the title is specified.
   * 
   * @example
   * PO Code: 12984554
   */
  defaultRemark?: string;
  /**
   * @remarks
   * The time when the payment ended.
   * 
   * @example
   * 202003
   */
  endCycle?: number;
  /**
   * @remarks
   * The time when the invoice was created. The time was in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2018-09-07 15:26:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of the invoice.
   * 
   * @example
   * 239875502738
   */
  id?: number;
  /**
   * @remarks
   * The company name in the invoice title.
   * 
   * @example
   * Test Company
   */
  invoiceTitle?: string;
  /**
   * @remarks
   * The type of issue.
   * 
   * @example
   * 1
   */
  issueType?: number;
  /**
   * @remarks
   * The address of the business license.
   * 
   * @example
   * XXX, XXX district, XXX city, XXX province
   */
  operatingLicenseAddress?: string;
  /**
   * @remarks
   * The phone number of the business license.
   * 
   * @example
   * 138xxxxxxxx
   */
  operatingLicensePhone?: string;
  /**
   * @remarks
   * The tax registration number.
   * 
   * @example
   * 21343245342534
   */
  registerNo?: string;
  /**
   * @remarks
   * The time when the payment started.
   * 
   * @example
   * 202002
   */
  startCycle?: number;
  /**
   * @remarks
   * The status of the invoice title.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The path and file name of the scanned copy of the tax registration certificate.
   * 
   * @example
   * taxationLicense.jpg
   */
  taxationLicense?: string;
  /**
   * @remarks
   * The type of the taxpayer. Valid values:
   * 
   * *   1: general taxpayer
   * *   2: special taxpayer
   * 
   * @example
   * 1
   */
  taxpayerType?: number;
  /**
   * @remarks
   * The instruction document of the invoice title change.
   * 
   * @example
   * instruction.doc
   */
  titleChangeInstructions?: string;
  /**
   * @remarks
   * The type of the invoice. Valid values:
   * 
   * *   0: plain value-added tax (VAT) invoice
   * *   1: special VAT invoice
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 34565465675
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * testNick
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      bank: 'Bank',
      bankNo: 'BankNo',
      customerType: 'CustomerType',
      defaultRemark: 'DefaultRemark',
      endCycle: 'EndCycle',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      invoiceTitle: 'InvoiceTitle',
      issueType: 'IssueType',
      operatingLicenseAddress: 'OperatingLicenseAddress',
      operatingLicensePhone: 'OperatingLicensePhone',
      registerNo: 'RegisterNo',
      startCycle: 'StartCycle',
      status: 'Status',
      taxationLicense: 'TaxationLicense',
      taxpayerType: 'TaxpayerType',
      titleChangeInstructions: 'TitleChangeInstructions',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'number',
      bank: 'string',
      bankNo: 'string',
      customerType: 'number',
      defaultRemark: 'string',
      endCycle: 'number',
      gmtCreate: 'string',
      id: 'number',
      invoiceTitle: 'string',
      issueType: 'number',
      operatingLicenseAddress: 'string',
      operatingLicensePhone: 'string',
      registerNo: 'string',
      startCycle: 'number',
      status: 'number',
      taxationLicense: 'string',
      taxpayerType: 'number',
      titleChangeInstructions: 'string',
      type: 'number',
      userId: 'number',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList extends $tea.Model {
  customerInvoice?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice[];
  static names(): { [key: string]: string } {
    return {
      customerInvoice: 'CustomerInvoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoice: { 'type': 'array', 'itemType': QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the invoice.
   */
  customerInvoiceList?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceList: 'CustomerInvoiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceList: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderListOrder extends $tea.Model {
  /**
   * @remarks
   * The aftertax amount of the order.
   * 
   * @example
   * 66
   */
  afterTaxAmount?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 34532532
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   New: purchases an instance.
   * *   Renew: renews an instance.
   * *   Upgrade: upgrades the configurations of an instance.
   * *   Refund: applies for a refund.
   * 
   * @example
   * New
   */
  orderType?: string;
  /**
   * @remarks
   * The currency of payment.
   * 
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The status of payment. Valid values for a non-refund order:
   * 
   * *   Unpaid: The order is not paid.
   * *   Paid: The order is paid.
   * *   Cancelled: The order is canceled.
   * 
   * > : The value is NULL for a refund order.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The time of payment.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @remarks
   * The pretax amount of the order.
   * 
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The pretax amount of the order in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @remarks
   * The pretax gross amount of the order.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @remarks
   * The code of the main service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the main service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the associated order.
   * 
   * @example
   * 234535345345342
   */
  relatedOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax of the order.
   * 
   * @example
   * 1
   */
  tax?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      currency: 'Currency',
      orderId: 'OrderId',
      orderType: 'OrderType',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      relatedOrderId: 'RelatedOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      commodityCode: 'string',
      createTime: 'string',
      currency: 'string',
      orderId: 'string',
      orderType: 'string',
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      relatedOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderList extends $tea.Model {
  order?: QueryOrdersResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': QueryOrdersResponseBodyDataOrderListOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The orders returned.
   */
  orderList?: QueryOrdersResponseBodyDataOrderList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: QueryOrdersResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyDataPermissionList extends $tea.Model {
  /**
   * @remarks
   * The time when the permission expired. If no value is returned, the permission is still valid. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the permission expired at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-05T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The code of the permission.
   * 
   * @example
   * allow_synchronize_finance_identity
   */
  permissionCode?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * The management account shares the credit control identity with the member.
   */
  permissionName?: string;
  /**
   * @remarks
   * The time when the permission took effect. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the permission took effect at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      permissionCode: 'PermissionCode',
      permissionName: 'PermissionName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      permissionCode: 'string',
      permissionName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The time when the relationship expired. If no value is returned, the relationship is still valid.
   * 
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 1990699401005016
   */
  masterId?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 1851253838840762
   */
  memberId?: number;
  /**
   * @remarks
   * The list of permissions.
   */
  permissionList?: QueryPermissionListResponseBodyDataPermissionList[];
  /**
   * @remarks
   * The type of the relationship. Valid values: FinancialManagement and FinancialTrusteeship.
   * 
   * @example
   * FinancialManagement
   */
  relationType?: string;
  /**
   * @remarks
   * The time when the relationship was established. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the relationship was established at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  setupTime?: string;
  /**
   * @remarks
   * The time when the relationship took effect. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the relationship took effect at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the relationship. For more information about valid values of this parameter, see the enumeration values of the RelationshipStatusEnum type in the following table.
   * 
   * @example
   * RELATED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      masterId: 'MasterId',
      memberId: 'MemberId',
      permissionList: 'PermissionList',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      masterId: 'number',
      memberId: 'number',
      permissionList: { 'type': 'array', 'itemType': QueryPermissionListResponseBodyDataPermissionList },
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyDataPrepaidCard extends $tea.Model {
  /**
   * @remarks
   * The services to which the prepaid card is applicable.
   * 
   * @example
   * All Alibaba Cloud services
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The scenario to which the prepaid card is applicable.
   * 
   * @example
   * test
   */
  applicableScenarios?: string;
  /**
   * @remarks
   * The balance of the prepaid card.
   * 
   * @example
   * 100.00
   */
  balance?: string;
  /**
   * @remarks
   * The time when the prepaid card took effect.
   * 
   * @example
   * 2018-08-03T01:39:11Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the prepaid card expired.
   * 
   * @example
   * 2019-08-04T01:39:11Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the prepaid card was issued.
   * 
   * @example
   * 2018-08-03T01:39:11Z
   */
  grantedTime?: string;
  /**
   * @remarks
   * The nominal value of the prepaid card.
   * 
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
   * @remarks
   * The ID of the prepaid card.
   * 
   * @example
   * 213432432
   */
  prepaidCardId?: number;
  /**
   * @remarks
   * The number of the prepaid card.
   * 
   * @example
   * Q-7edaab979fc9
   */
  prepaidCardNo?: string;
  /**
   * @remarks
   * The status of the prepaid card. Valid values:
   * 
   * *   Available: The prepaid card is valid.
   * *   Expired: The prepaid card expired.
   * *   Cancelled: The prepaid card is invalid.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      prepaidCardId: 'PrepaidCardId',
      prepaidCardNo: 'PrepaidCardNo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      prepaidCardId: 'number',
      prepaidCardNo: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyData extends $tea.Model {
  prepaidCard?: QueryPrepaidCardsResponseBodyDataPrepaidCard[];
  static names(): { [key: string]: string } {
    return {
      prepaidCard: 'PrepaidCard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepaidCard: { 'type': 'array', 'itemType': QueryPrepaidCardsResponseBodyDataPrepaidCard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList extends $tea.Model {
  /**
   * @remarks
   * The code of the factor.
   * 
   * @example
   * vm_region_no
   */
  priceFactorCode?: string;
  /**
   * @remarks
   * The name of the factor.
   * 
   * @example
   * Region
   */
  priceFactorName?: string;
  /**
   * @remarks
   * The values of the factor.
   */
  priceFactorValueList?: string[];
  static names(): { [key: string]: string } {
    return {
      priceFactorCode: 'PriceFactorCode',
      priceFactorName: 'PriceFactorName',
      priceFactorValueList: 'PriceFactorValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceFactorCode: 'string',
      priceFactorName: 'string',
      priceFactorValueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyDataPriceEntityInfoList extends $tea.Model {
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * instance_type
   */
  priceEntityCode?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * Elastic Compute Service (ECS) instance
   */
  priceEntityName?: string;
  /**
   * @remarks
   * The factors of the billable item.
   */
  priceFactorList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityCode: 'PriceEntityCode',
      priceEntityName: 'PriceEntityName',
      priceFactorList: 'PriceFactorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityCode: 'string',
      priceEntityName: 'string',
      priceFactorList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the billable items.
   */
  priceEntityInfoList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityInfoList: 'PriceEntityInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityInfoList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataProductListProduct extends $tea.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * cdn
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * CDN (Pay-as-you-go)
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * CDN
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      productName: 'ProductName',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productName: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataProductList extends $tea.Model {
  product?: QueryProductListResponseBodyDataProductListProduct[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': QueryProductListResponseBodyDataProductListProduct },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service definitions.
   */
  productList?: QueryProductListResponseBodyDataProductList;
  /**
   * @remarks
   * The total number of services.
   * 
   * @example
   * 449
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productList: 'ProductList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      productList: QueryProductListResponseBodyDataProductList,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  /**
   * @remarks
   * The time when the fees are deducted by using the RI.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  deductDate?: string;
  /**
   * @remarks
   * The total amount of computing power of the RI or capacity of SCU in the time period.
   * 
   * @example
   * 1
   */
  deductFactorTotal?: number;
  /**
   * @remarks
   * The deduct factor. This parameter is returned only if the RICommodityCode parameter is set to ecsRi.
   * 
   * @example
   * 24
   */
  deductHours?: string;
  /**
   * @remarks
   * The computing power or capacity of the pay-as-you-go instance whose fees are deducted by using the RI.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The code of the service whose fees are deducted by using the RI.
   * 
   * @example
   * rds
   */
  deductedCommodityCode?: string;
  /**
   * @remarks
   * The ID of the instance whose fees are deducted by using the RI.
   * 
   * @example
   * safdffghfgh
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The name of the service whose fees are deducted by using the RI.
   * 
   * @example
   * ApsaraDB RDS
   */
  deductedProductDetail?: string;
  /**
   * @remarks
   * The instance type of the instance whose fees are deducted by using the RI.
   * 
   * @example
   * rds.mysql.s3.large
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The ID of the RI.
   * 
   * @example
   * 324253645
   */
  RIInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceSpec: 'InstanceSpec',
      RIInstanceId: 'RIInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'string',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceSpec: 'string',
      RIInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailList extends $tea.Model {
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryRIUtilizationDetailResponseBodyDataDetailListDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The usage details of the RI.
   */
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailList;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryRIUtilizationDetailResponseBodyDataDetailList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeemRedeem extends $tea.Model {
  /**
   * @remarks
   * The services to which the redemption coupon is applicable.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The balance of the redemption coupon.
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * The time when the redemption coupon took effect.
   * 
   * @example
   * 2018-05-14 20:25:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the redemption coupon expired.
   * 
   * @example
   * 2018-06-13 20:25:00
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the redemption coupon was issued.
   * 
   * @example
   * 2018-05-14 20:25:00
   */
  grantedTime?: string;
  /**
   * @remarks
   * The nominal value of the redemption coupon.
   * 
   * @example
   * 0
   */
  nominalValue?: string;
  /**
   * @remarks
   * The ID of the redemption coupon.
   * 
   * @example
   * 1342
   */
  redeemId?: string;
  /**
   * @remarks
   * The number of the redemption coupon.
   * 
   * @example
   * 4889*****1610
   */
  redeemNo?: string;
  /**
   * @remarks
   * The specifications of the redemption coupon.
   * 
   * @example
   * N/A
   */
  specification?: string;
  /**
   * @remarks
   * The status of the redemption coupon. Valid values:
   * 
   * *   Generated
   * *   CallBack
   * *   RefundPending
   * *   Canceled
   * *   Order_Canceled
   * *   ActivePending
   * *   ActiveSuccess
   * *   ExchangePending
   * *   ExchangeSuccess
   * *   Expired
   * 
   * @example
   * Generated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      redeemId: 'RedeemId',
      redeemNo: 'RedeemNo',
      specification: 'Specification',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      redeemId: 'string',
      redeemNo: 'string',
      specification: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeem extends $tea.Model {
  redeem?: QueryRedeemResponseBodyDataRedeemRedeem[];
  static names(): { [key: string]: string } {
    return {
      redeem: 'Redeem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redeem: { 'type': 'array', 'itemType': QueryRedeemResponseBodyDataRedeemRedeem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the redemption coupon.
   */
  redeem?: QueryRedeemResponseBodyDataRedeem;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      redeem: 'Redeem',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      redeem: QueryRedeemResponseBodyDataRedeem,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyDataFinancialRelationInfoList extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1851253838840762
   */
  accountId?: number;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * caiwuyun_test4
   */
  accountName?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test4
   */
  accountNickName?: string;
  /**
   * @remarks
   * The type of the account. Valid values: MASTER and MEMBER.
   * 
   * @example
   * MEMBER
   */
  accountType?: string;
  /**
   * @remarks
   * The time when the relationship became invalid. If no value is returned, the relationship is still valid.
   * 
   * @example
   * 2021-03-08T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the relationship.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the relationship. Valid values: FinancialManagement and FinancialTrusteeship.
   * 
   * @example
   * FinancialManagement
   */
  relationType?: string;
  /**
   * @remarks
   * The time when the relationship was established. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  setupTime?: string;
  /**
   * @remarks
   * The time when the relationship became valid. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the relationship. One of the enumeration members of the RelationshipStatusEnum data type is returned.
   * 
   * @example
   * RELATED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountNickName: 'AccountNickName',
      accountType: 'AccountType',
      endTime: 'EndTime',
      relationId: 'RelationId',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountNickName: 'string',
      accountType: 'string',
      endTime: 'string',
      relationId: 'number',
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The relationships.
   */
  financialRelationInfoList?: QueryRelationListResponseBodyDataFinancialRelationInfoList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      financialRelationInfoList: 'FinancialRelationInfoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financialRelationInfoList: { 'type': 'array', 'itemType': QueryRelationListResponseBodyDataFinancialRelationInfoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  denominator?: number;
  /**
   * @example
   * 10
   */
  numerator?: number;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  /**
   * @example
   * 0
   */
  thresholdType?: number;
  static names(): { [key: string]: string } {
    return {
      denominator: 'Denominator',
      numerator: 'Numerator',
      thresholdAmount: 'ThresholdAmount',
      thresholdType: 'ThresholdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denominator: 'number',
      numerator: 'number',
      thresholdAmount: 'string',
      thresholdType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts extends $tea.Model {
  product?: string[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstancesInstance extends $tea.Model {
  /**
   * @remarks
   * The services to which the resource plan is applicable.
   */
  applicableProducts?: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The deduction type. Example: Absolute.
   * 
   * @example
   * Absolute
   */
  deductType?: string;
  /**
   * @remarks
   * The time when the resource plan took effect.
   * 
   * @example
   * 2018-09-12T09:51:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the resource plan expired.
   * 
   * @example
   * 2019-03-12T16:00:00Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * OSSBAG-cn-v0h1s4hma01
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the resource plan.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_sh
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 40.000
   */
  remainingAmount?: string;
  /**
   * @remarks
   * The unit of the remaining quota.
   * 
   * @example
   * GB
   */
  remainingAmountUnit?: string;
  /**
   * @remarks
   * The remarks on the resource plan. The remarks must be made in Chinese.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the resource plan. Valid values:
   * 
   * *   Available
   * *   Expired
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The total quota of the resource plan.
   * 
   * @example
   * 40.000
   */
  totalAmount?: string;
  /**
   * @remarks
   * The unit of the total quota.
   * 
   * @example
   * GB
   */
  totalAmountUnit?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      commodityCode: 'CommodityCode',
      deductType: 'DeductType',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      instanceId: 'InstanceId',
      packageType: 'PackageType',
      region: 'Region',
      remainingAmount: 'RemainingAmount',
      remainingAmountUnit: 'RemainingAmountUnit',
      remark: 'Remark',
      status: 'Status',
      totalAmount: 'TotalAmount',
      totalAmountUnit: 'TotalAmountUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts,
      commodityCode: 'string',
      deductType: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      instanceId: 'string',
      packageType: 'string',
      region: 'string',
      remainingAmount: 'string',
      remainingAmountUnit: 'string',
      remark: 'string',
      status: 'string',
      totalAmount: 'string',
      totalAmountUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstances extends $tea.Model {
  instance?: QueryResourcePackageInstancesResponseBodyDataInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': QueryResourcePackageInstancesResponseBodyDataInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The details of the instances.
   */
  instances?: QueryResourcePackageInstancesResponseBodyDataInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instances: 'Instances',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instances: QueryResourcePackageInstancesResponseBodyDataInstances,
      pageNum: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The billable item for which the fee is deducted.
   */
  billModule?: string;
  billingCycle?: string;
  billingOfficialPrice?: string;
  /**
   * @remarks
   * The service for which the fee is deducted.
   */
  deductCommodity?: string;
  /**
   * @remarks
   * The deducted amount.
   * 
   * @example
   * 0.52
   */
  deductFee?: string;
  /**
   * @remarks
   * The ID of the instance for which the fee is deducted.
   * 
   * @example
   * i-XXXXXXXXX
   */
  deductInstanceId?: string;
  /**
   * @remarks
   * The deduction rate.
   * 
   * @example
   * 1.0
   */
  deductRate?: string;
  deductedOfficialPrice?: string;
  /**
   * @remarks
   * The discount used for the current deduction.
   * 
   * @example
   * 0.069
   */
  discountRate?: string;
  /**
   * @remarks
   * The end of the billing cycle for which the fee is deducted.
   * 
   * @example
   * 2020-12-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxx
   */
  instanceId?: string;
  instanceSpec?: string;
  instanceTypeFamily?: string;
  /**
   * @example
   * 1906589291020438
   */
  ownerId?: number;
  region?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose
   * *   ecs: ECS compute
   * 
   * @example
   * ecs
   */
  savingsType?: string;
  /**
   * @remarks
   * The beginning of the billing cycle for which the fee is deducted. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-12-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1906589291020438
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      billModule: 'BillModule',
      billingCycle: 'BillingCycle',
      billingOfficialPrice: 'BillingOfficialPrice',
      deductCommodity: 'DeductCommodity',
      deductFee: 'DeductFee',
      deductInstanceId: 'DeductInstanceId',
      deductRate: 'DeductRate',
      deductedOfficialPrice: 'DeductedOfficialPrice',
      discountRate: 'DiscountRate',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      ownerId: 'OwnerId',
      region: 'Region',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModule: 'string',
      billingCycle: 'string',
      billingOfficialPrice: 'string',
      deductCommodity: 'string',
      deductFee: 'string',
      deductInstanceId: 'string',
      deductRate: 'string',
      deductedOfficialPrice: 'string',
      discountRate: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      instanceTypeFamily: 'string',
      ownerId: 'number',
      region: 'string',
      savingsType: 'string',
      startTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The deduction details.
   */
  items?: QuerySavingsPlansDeductLogResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDeductLogResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * Pay-as-you-go Elastic Compute Service (ECS) instance
   */
  commodityName?: string;
  /**
   * @remarks
   * The contracted discount.
   * 
   * @example
   * 0.85
   */
  contractDiscountRate?: string;
  /**
   * @remarks
   * The cycle based on which queries were performed.
   * 
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @remarks
   * The discount provided by the official website.
   * 
   * @example
   * 0.85
   */
  discountRate?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * Instance
   */
  moduleName?: string;
  /**
   * @remarks
   * The payment mode. Valid values:
   * 
   * *   total: all upfront
   * *   half: half upfront
   * *   zero: no upfront
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjiakou-na62-a01
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html) operation to query the region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs.g6
   */
  spec?: string;
  /**
   * @remarks
   * The type of the savings plan.
   * 
   * @example
   * universal
   */
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityName: 'CommodityName',
      contractDiscountRate: 'ContractDiscountRate',
      cycle: 'Cycle',
      discountRate: 'DiscountRate',
      moduleName: 'ModuleName',
      payMode: 'PayMode',
      region: 'Region',
      regionCode: 'RegionCode',
      spec: 'Spec',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityName: 'string',
      contractDiscountRate: 'string',
      cycle: 'string',
      discountRate: 'string',
      moduleName: 'string',
      payMode: 'string',
      region: 'string',
      regionCode: 'string',
      spec: 'string',
      spnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The IP address of the request.
   * 
   * @example
   * 100.104.180.109
   */
  hostId?: string;
  /**
   * @remarks
   * The information about the discounts on saving plans.
   */
  items?: QuerySavingsPlansDiscountResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDiscountResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag to query.
   * 
   * @example
   * ecs
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to query.
   * 
   * @example
   * 001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyDataItemsTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyDataItems extends $tea.Model {
  /**
   * @remarks
   * The allocation status. Valid values:
   * 
   * *   unallocated
   * *   allocated
   * *   beAllocated
   * 
   * @example
   * unallocated
   */
  allocationStatus?: string;
  /**
   * @example
   * savingplan_common_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The currency. Valid values: CNY and USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 100.0
   */
  currentPoolValue?: string;
  /**
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @example
   * HOUR
   */
  deductCycleType?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 1663135741039
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The instance family information. For an instance of the Elastic Compute Service (ECS) compute type, the value indicates the ECS instance family or the ECS instance family package.
   * 
   * @example
   * ecs.g6
   */
  instanceFamily?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 100.0
   */
  lastBillTotalUsage?: string;
  /**
   * @example
   * 0.8
   */
  lastBillUtilization?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * 
   * *   total: All Upfront
   * *   half: Partial Upfront
   * *   zero: No Upfront
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The commitment.
   * 
   * @example
   * 1.00
   */
  poolValue?: string;
  /**
   * @remarks
   * The prepaid amount.
   * 
   * @example
   * 8760.00
   */
  prepayFee?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-zhangjiakou-na62-a01
   */
  region?: string;
  /**
   * @example
   * 100.0
   */
  restPoolValue?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose
   * *   ecs: ECS compute
   * 
   * @example
   * ECS
   */
  savingsType?: string;
  /**
   * @remarks
   * The time when the instance takes effect. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 1663135741039
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   NORMAL: normal
   * *   LIMIT: stopped due to overdue payment
   * *   RELEASE: released
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The details about the tags.
   */
  tags?: QuerySavingsPlansInstanceResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The total amount that is saved.
   * 
   * @example
   * 20.00
   */
  totalSave?: string;
  /**
   * @remarks
   * The total usage.
   * 
   * @example
   * 1.0
   */
  utilization?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      currentPoolValue: 'CurrentPoolValue',
      cycle: 'Cycle',
      deductCycleType: 'DeductCycleType',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      instanceFamily: 'InstanceFamily',
      instanceId: 'InstanceId',
      lastBillTotalUsage: 'LastBillTotalUsage',
      lastBillUtilization: 'LastBillUtilization',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      prepayFee: 'PrepayFee',
      region: 'Region',
      restPoolValue: 'RestPoolValue',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
      tags: 'Tags',
      totalSave: 'TotalSave',
      utilization: 'Utilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      commodityCode: 'string',
      currency: 'string',
      currentPoolValue: 'string',
      cycle: 'string',
      deductCycleType: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      instanceFamily: 'string',
      instanceId: 'string',
      lastBillTotalUsage: 'string',
      lastBillUtilization: 'string',
      payMode: 'string',
      poolValue: 'string',
      prepayFee: 'string',
      region: 'string',
      restPoolValue: 'string',
      savingsType: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItemsTags },
      totalSave: 'string',
      utilization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details about the instances.
   */
  items?: QuerySavingsPlansInstanceResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @example
   * 0
   */
  afterTaxAmount?: number;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * SubscriptionOrder
   */
  item?: string;
  /**
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @example
   * 3532535235
   */
  ownerID?: string;
  /**
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @example
   * USD
   */
  paymentCurrency?: string;
  /**
   * @example
   * 2020-03-11 08:00:00
   */
  paymentTime?: string;
  /**
   * @example
   * 2O3AADJFEAF2PDKSFAMFCB11918
   */
  paymentTransactionID?: string;
  /**
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  productName?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * 2020xxxx5912
   */
  recordID?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @example
   * PayFinish
   */
  status?: string;
  /**
   * @example
   * 325345254353
   */
  subOrderId?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * 0
   */
  tax?: number;
  /**
   * @example
   * 2020-03-11 08:00:00
   */
  usageEndTime?: string;
  /**
   * @example
   * 2020-03-11 07:00:00
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      paymentTransactionID: 'PaymentTransactionID',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      recordID: 'RecordID',
      roundDownDiscount: 'RoundDownDiscount',
      status: 'Status',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      bizType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      paymentTransactionID: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      recordID: 'string',
      roundDownDiscount: 'string',
      status: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyDataItems extends $tea.Model {
  item?: QuerySettleBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySettleBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyData extends $tea.Model {
  /**
   * @example
   * 185xxxxx489
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @example
   * 2020-02
   */
  billingCycle?: string;
  items?: QuerySettleBillResponseBodyDataItems;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUQARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QuerySettleBillResponseBodyDataItems,
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList extends $tea.Model {
  /**
   * @remarks
   * The code of the pricing factor.
   * 
   * @example
   * 212fbd27866307fc79ecf06934a88b2c
   */
  factorCode?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  max?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  min?: string;
  /**
   * @remarks
   * The closure type of the interval.
   * 
   * @example
   * LORC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      factorCode: 'FactorCode',
      max: 'Max',
      min: 'Min',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorCode: 'string',
      max: 'string',
      min: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList extends $tea.Model {
  /**
   * @remarks
   * The unique code of the SKU price.
   * 
   * @example
   * ac74dd7b52ae6389ddef099283fb8275
   */
  cskuCode?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 100
   */
  price?: string;
  /**
   * @remarks
   * The pricing mode.
   * 
   * @example
   * STEP_ARRIVE
   */
  priceMode?: string;
  /**
   * @remarks
   * The pricing type.
   * 
   * @example
   * hourPrice
   */
  priceType?: string;
  /**
   * @remarks
   * The unit of the price.
   * 
   * @example
   * USD (per unit)
   */
  priceUnit?: string;
  /**
   * @remarks
   * If the PriceMode parameter is set to STEP_ACCUMULATION or STEP_ARRIVE, the value of this field exists and specifies the range. If the PriceMode parameter is set to NORMAL_PRICE, the value of this field is null.
   */
  rangeList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList[];
  /**
   * @remarks
   * The usage unit.
   * 
   * @example
   * Count
   */
  usageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      cskuCode: 'CskuCode',
      currency: 'Currency',
      price: 'Price',
      priceMode: 'PriceMode',
      priceType: 'PriceType',
      priceUnit: 'PriceUnit',
      rangeList: 'RangeList',
      usageUnit: 'UsageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuCode: 'string',
      currency: 'string',
      price: 'string',
      priceMode: 'string',
      priceType: 'string',
      priceUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList },
      usageUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList extends $tea.Model {
  /**
   * @remarks
   * The prices of the SKUs.
   */
  cskuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList[];
  /**
   * @remarks
   * The code of the SKU.
   * 
   * @example
   * 017c15a31507bc6de22aa93777461adc
   */
  skuCode?: string;
  /**
   * @remarks
   * The values of the pricing factors.
   */
  skuFactorMap?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cskuPriceList: 'CskuPriceList',
      skuCode: 'SkuCode',
      skuFactorMap: 'SkuFactorMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList },
      skuCode: 'string',
      skuFactorMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePage extends $tea.Model {
  /**
   * @remarks
   * The token that is used to query the next page.
   * 
   * @example
   * 080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The SKUs.
   */
  skuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList[];
  /**
   * @remarks
   * The total number of SKUs.
   * 
   * @example
   * 18732
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      skuPriceList: 'SkuPriceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      skuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The SKUs of the pricing object.
   */
  skuPricePage?: QuerySkuPriceListResponseBodyDataSkuPricePage;
  static names(): { [key: string]: string } {
    return {
      skuPricePage: 'SkuPricePage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuPricePage: QuerySkuPriceListResponseBodyDataSkuPricePage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItemsItem extends $tea.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The billing date, in the YYYY-MM-DD format.
   * 
   * @example
   * 2020-01-20
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item.
   * 
   * @example
   * Other
   */
  billingItem?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The commodity code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of the currency. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted by using resource plans.
   * 
   * @example
   * NULL
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The configurations of the instance.
   * 
   * @example
   * CPU:12
   */
  instanceConfig?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * ecs.sn1ne.3xlarge
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill. Valid values: SubscriptionOrder: subscription order PayAsYouGoBill: pay-as-you-go bill Refund: refund Adjustment: reconciliation
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The unit price. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * CNY
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The unsettled amount of the bill.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member. This parameter is returned in a multi-account payment scenario.
   * 
   * @example
   * 169***013
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The service code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 10
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the validity period.
   * 
   * @example
   * Seconds
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The ID of the account to which the split bill belongs.
   * 
   * @example
   * 122
   */
  splitAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the split item belongs.
   * 
   * @example
   * 12@test.com
   */
  splitAccountName?: string;
  /**
   * @remarks
   * The month in which the split item is used.
   * 
   * @example
   * 2020-06
   */
  splitBillingCycle?: string;
  /**
   * @remarks
   * The commodity code of the split item.
   * 
   * @example
   * rds
   */
  splitCommodityCode?: string;
  /**
   * @remarks
   * The ID of the split item.
   * 
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @remarks
   * The name of the service to which the split item belongs.
   * 
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: subscription PayAsYouGo: pay-as-you-go This parameter is returned together with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The usage of the split item. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
      splitCommodityCode: 'SplitCommodityCode',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
      splitCommodityCode: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItems extends $tea.Model {
  item?: QuerySplitItemBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySplitItemBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxx3489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QuerySplitItemBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QuerySplitItemBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * Indicates that the returned usage data starts from the next page. If no value is returned for this parameter or this parameter is not returned, no data can be queried.
   * 
   * @example
   * NextToken
   */
  marker?: string;
  omsData?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      marker: 'Marker',
      omsData: 'OmsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      marker: 'string',
      omsData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the refund order that is returned only if the instance is unsubscribed from.
   * 
   * @example
   * 2100000000***
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * Indicates whether the instance is released.
   * 
   * @example
   * true
   */
  releaseResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      releaseResult: 'ReleaseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      releaseResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * hostid
   * 
   * @example
   * HostId
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceRequestParameter extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bandwidth
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * disk
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100.100.64.1:8150
   */
  hostId?: string;
  /**
   * @example
   * 202407022550621
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 202657601410661
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * @example
   * OSSBAG-cn-0xl0n****003
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 204322560333
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can create N tag keys at a time. Valid values of N: 1 to 20. The value of this parameter can be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag N. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * @example
   * OSSBAG-cn-0xl*****002
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 73387246238746
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
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
      'cn-hangzhou': "business.aliyuncs.com",
      'cn-shanghai': "business.aliyuncs.com",
      'ap-southeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "business.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "business.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "business.aliyuncs.com",
      'cn-beijing-finance-1': "business.aliyuncs.com",
      'cn-beijing-finance-pop': "business.aliyuncs.com",
      'cn-beijing-gov-1': "business.aliyuncs.com",
      'cn-beijing-nu16-b01': "business.aliyuncs.com",
      'cn-chengdu': "business.aliyuncs.com",
      'cn-edge-1': "business.aliyuncs.com",
      'cn-fujian': "business.aliyuncs.com",
      'cn-haidian-cm12-c01': "business.aliyuncs.com",
      'cn-hangzhou-bj-b01': "business.aliyuncs.com",
      'cn-hangzhou-finance': "business.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "business.aliyuncs.com",
      'cn-hangzhou-test-306': "business.aliyuncs.com",
      'cn-hongkong': "business.aliyuncs.com",
      'cn-hongkong-finance-pop': "business.aliyuncs.com",
      'cn-huhehaote': "business.aliyuncs.com",
      'cn-huhehaote-nebula-1': "business.aliyuncs.com",
      'cn-north-2-gov-1': "business.aliyuncs.com",
      'cn-qingdao': "business.aliyuncs.com",
      'cn-qingdao-nebula': "business.aliyuncs.com",
      'cn-shanghai-et15-b01': "business.aliyuncs.com",
      'cn-shanghai-et2-b01': "business.aliyuncs.com",
      'cn-shanghai-finance-1': "business.aliyuncs.com",
      'cn-shanghai-inner': "business.aliyuncs.com",
      'cn-shanghai-internal-test-1': "business.aliyuncs.com",
      'cn-shenzhen': "business.aliyuncs.com",
      'cn-shenzhen-finance-1': "business.aliyuncs.com",
      'cn-shenzhen-inner': "business.aliyuncs.com",
      'cn-shenzhen-st4-d01': "business.aliyuncs.com",
      'cn-shenzhen-su18-b01': "business.aliyuncs.com",
      'cn-wuhan': "business.aliyuncs.com",
      'cn-wulanchabu': "business.aliyuncs.com",
      'cn-yushanfang': "business.aliyuncs.com",
      'cn-zhangbei': "business.aliyuncs.com",
      'cn-zhangbei-na61-b01': "business.aliyuncs.com",
      'cn-zhangjiakou': "business.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "business.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "business.aliyuncs.com",
      'eu-central-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "business.ap-southeast-1.aliyuncs.com",
      'me-east-1': "business.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "business.ap-southeast-1.aliyuncs.com",
      'us-east-1': "business.ap-southeast-1.aliyuncs.com",
      'us-west-1': "business.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bssopenapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a financial relationship.
   * 
   * @remarks
   * For more information about a financial relationship, see [Financial relationships](https://help.aliyun.com/document_detail/100376.html?spm=a2c4g.11186623.6.563.52a83908ypl4yE) or [Financial relationships](https://www.alibabacloud.com/help/en/doc-detail/116383.html). 
   * If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
   * 
   * @param request - AddAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAccountRelationResponse
   */
  async addAccountRelationWithOptions(request: AddAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAccountRelationResponse>(await this.callApi(params, req, runtime), new AddAccountRelationResponse({}));
  }

  /**
   * Creates a financial relationship.
   * 
   * @remarks
   * For more information about a financial relationship, see [Financial relationships](https://help.aliyun.com/document_detail/100376.html?spm=a2c4g.11186623.6.563.52a83908ypl4yE) or [Financial relationships](https://www.alibabacloud.com/help/en/doc-detail/116383.html). 
   * If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
   * 
   * @param request - AddAccountRelationRequest
   * @returns AddAccountRelationResponse
   */
  async addAccountRelation(request: AddAccountRelationRequest): Promise<AddAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccountRelationWithOptions(request, runtime);
  }

  /**
   * Transfers resource instances from the source cost center to the destination cost center.
   * 
   * @param request - AllocateCostUnitResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateCostUnitResourceResponse
   */
  async allocateCostUnitResourceWithOptions(request: AllocateCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<AllocateCostUnitResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromUnitId)) {
      query["FromUnitId"] = request.fromUnitId;
    }

    if (!Util.isUnset(request.fromUnitUserId)) {
      query["FromUnitUserId"] = request.fromUnitUserId;
    }

    if (!Util.isUnset(request.resourceInstanceList)) {
      query["ResourceInstanceList"] = request.resourceInstanceList;
    }

    if (!Util.isUnset(request.toUnitId)) {
      query["ToUnitId"] = request.toUnitId;
    }

    if (!Util.isUnset(request.toUnitUserId)) {
      query["ToUnitUserId"] = request.toUnitUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateCostUnitResourceResponse>(await this.callApi(params, req, runtime), new AllocateCostUnitResourceResponse({}));
  }

  /**
   * Transfers resource instances from the source cost center to the destination cost center.
   * 
   * @param request - AllocateCostUnitResourceRequest
   * @returns AllocateCostUnitResourceResponse
   */
  async allocateCostUnitResource(request: AllocateCostUnitResourceRequest): Promise<AllocateCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateCostUnitResourceWithOptions(request, runtime);
  }

  /**
   * Submits an application for an invoice.
   * 
   * @param request - ApplyInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyInvoiceResponse
   */
  async applyInvoiceWithOptions(request: ApplyInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<ApplyInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!Util.isUnset(request.applyUserNick)) {
      query["ApplyUserNick"] = request.applyUserNick;
    }

    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.invoiceAmount)) {
      query["InvoiceAmount"] = request.invoiceAmount;
    }

    if (!Util.isUnset(request.invoiceByAmount)) {
      query["InvoiceByAmount"] = request.invoiceByAmount;
    }

    if (!Util.isUnset(request.invoicingType)) {
      query["InvoicingType"] = request.invoicingType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processWay)) {
      query["ProcessWay"] = request.processWay;
    }

    if (!Util.isUnset(request.selectedIds)) {
      query["SelectedIds"] = request.selectedIds;
    }

    if (!Util.isUnset(request.userRemark)) {
      query["UserRemark"] = request.userRemark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyInvoice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyInvoiceResponse>(await this.callApi(params, req, runtime), new ApplyInvoiceResponse({}));
  }

  /**
   * Submits an application for an invoice.
   * 
   * @param request - ApplyInvoiceRequest
   * @returns ApplyInvoiceResponse
   */
  async applyInvoice(request: ApplyInvoiceRequest): Promise<ApplyInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyInvoiceWithOptions(request, runtime);
  }

  /**
   * Cancels an unpaid order.
   * 
   * @param request - CancelOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderResponse
   */
  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrder",
      version: "2017-12-14",
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

  /**
   * Cancels an unpaid order.
   * 
   * @param request - CancelOrderRequest
   * @returns CancelOrderResponse
   */
  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeResellerConsumeAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResellerConsumeAmountResponse
   */
  async changeResellerConsumeAmountWithOptions(request: ChangeResellerConsumeAmountRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResellerConsumeAmountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustType)) {
      query["AdjustType"] = request.adjustType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.extendMap)) {
      query["ExtendMap"] = request.extendMap;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResellerConsumeAmount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResellerConsumeAmountResponse>(await this.callApi(params, req, runtime), new ChangeResellerConsumeAmountResponse({}));
  }

  /**
   * @param request - ChangeResellerConsumeAmountRequest
   * @returns ChangeResellerConsumeAmountResponse
   */
  async changeResellerConsumeAmount(request: ChangeResellerConsumeAmountRequest): Promise<ChangeResellerConsumeAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResellerConsumeAmountWithOptions(request, runtime);
  }

  /**
   * Confirms the invitation initiated by the master account.
   * 
   * @remarks
   * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
   * 
   * @param request - ConfirmRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmRelationResponse
   */
  async confirmRelationWithOptions(request: ConfirmRelationRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.confirmCode)) {
      query["ConfirmCode"] = request.confirmCode;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmRelationResponse>(await this.callApi(params, req, runtime), new ConfirmRelationResponse({}));
  }

  /**
   * Confirms the invitation initiated by the master account.
   * 
   * @remarks
   * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
   * 
   * @param request - ConfirmRelationRequest
   * @returns ConfirmRelationResponse
   */
  async confirmRelation(request: ConfirmRelationRequest): Promise<ConfirmRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmRelationWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an instance. You can call this operation to switch the billing method from pay-as-you-go to subscription for Server Load Balancer (SLB) instances, elastic IP addresses (EIPs), and NAT gateways, and switch the billing method from subscription to pay-as-you-go for SLB instances and EIPs.
   * 
   * @param request - ConvertChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertChargeTypeResponse
   */
  async convertChargeTypeWithOptions(request: ConvertChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ConvertChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertChargeType",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertChargeTypeResponse>(await this.callApi(params, req, runtime), new ConvertChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of an instance. You can call this operation to switch the billing method from pay-as-you-go to subscription for Server Load Balancer (SLB) instances, elastic IP addresses (EIPs), and NAT gateways, and switch the billing method from subscription to pay-as-you-go for SLB instances and EIPs.
   * 
   * @param request - ConvertChargeTypeRequest
   * @returns ConvertChargeTypeResponse
   */
  async convertChargeType(request: ConvertChargeTypeRequest): Promise<ConvertChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertChargeTypeWithOptions(request, runtime);
  }

  /**
   * Creates an account to establish a financial relationship.
   * 
   * @remarks
   * You can call this operation to create an account so as to establish a master-member financial relationship.
   * 
   * @param request - CreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgAccountResponse
   */
  async createAgAccountWithOptions(request: CreateAgAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountAttr)) {
      query["AccountAttr"] = request.accountAttr;
    }

    if (!Util.isUnset(request.cityName)) {
      query["CityName"] = request.cityName;
    }

    if (!Util.isUnset(request.enterpriseName)) {
      query["EnterpriseName"] = request.enterpriseName;
    }

    if (!Util.isUnset(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!Util.isUnset(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!Util.isUnset(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!Util.isUnset(request.nationCode)) {
      query["NationCode"] = request.nationCode;
    }

    if (!Util.isUnset(request.postcode)) {
      query["Postcode"] = request.postcode;
    }

    if (!Util.isUnset(request.provinceName)) {
      query["ProvinceName"] = request.provinceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAgAccount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAgAccountResponse>(await this.callApi(params, req, runtime), new CreateAgAccountResponse({}));
  }

  /**
   * Creates an account to establish a financial relationship.
   * 
   * @remarks
   * You can call this operation to create an account so as to establish a master-member financial relationship.
   * 
   * @param request - CreateAgAccountRequest
   * @returns CreateAgAccountResponse
   */
  async createAgAccount(request: CreateAgAccountRequest): Promise<CreateAgAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  /**
   * Creates a cost center. You can create multiple cost centers at a time.
   * 
   * @param request - CreateCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCostUnitResponse
   */
  async createCostUnitWithOptions(request: CreateCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<CreateCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCostUnitResponse>(await this.callApi(params, req, runtime), new CreateCostUnitResponse({}));
  }

  /**
   * Creates a cost center. You can create multiple cost centers at a time.
   * 
   * @param request - CreateCostUnitRequest
   * @returns CreateCostUnitResponse
   */
  async createCostUnit(request: CreateCostUnitRequest): Promise<CreateCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCostUnitWithOptions(request, runtime);
  }

  /**
   * Creates an instance. If you call this operation, an order for a new instance is created and the order is automatically paid for. You cannot create Elastic Compute Service (ECS) instances or ApsaraDB RDS instances by calling the operation.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logistics)) {
      query["Logistics"] = request.logistics;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an instance. If you call this operation, an order for a new instance is created and the order is automatically paid for. You cannot create Elastic Compute Service (ECS) instances or ApsaraDB RDS instances by calling the operation.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - CreateResellerUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResellerUserQuotaResponse
   */
  async createResellerUserQuotaWithOptions(request: CreateResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<CreateResellerUserQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new CreateResellerUserQuotaResponse({}));
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - CreateResellerUserQuotaRequest
   * @returns CreateResellerUserQuotaResponse
   */
  async createResellerUserQuota(request: CreateResellerUserQuotaRequest): Promise<CreateResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResellerUserQuotaWithOptions(request, runtime);
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourcePackageResponse
   */
  async createResourcePackageWithOptions(request: CreateResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourcePackageResponse>(await this.callApi(params, req, runtime), new CreateResourcePackageResponse({}));
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateResourcePackageRequest
   * @returns CreateResourcePackageResponse
   */
  async createResourcePackage(request: CreateResourcePackageRequest): Promise<CreateResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourcePackageWithOptions(request, runtime);
  }

  /**
   * Creates a savings plan. After you call this operation, a savings plan is purchased and paid for.
   * 
   * @param tmpReq - CreateSavingsPlansInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavingsPlansInstanceResponse
   */
  async createSavingsPlansInstanceWithOptions(tmpReq: CreateSavingsPlansInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSavingsPlansInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSavingsPlansInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendMap)) {
      request.extendMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendMap, "ExtendMap", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.extendMapShrink)) {
      query["ExtendMap"] = request.extendMapShrink;
    }

    if (!Util.isUnset(request.payMode)) {
      query["PayMode"] = request.payMode;
    }

    if (!Util.isUnset(request.poolValue)) {
      query["PoolValue"] = request.poolValue;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new CreateSavingsPlansInstanceResponse({}));
  }

  /**
   * Creates a savings plan. After you call this operation, a savings plan is purchased and paid for.
   * 
   * @param request - CreateSavingsPlansInstanceRequest
   * @returns CreateSavingsPlansInstanceResponse
   */
  async createSavingsPlansInstance(request: CreateSavingsPlansInstanceRequest): Promise<CreateSavingsPlansInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSavingsPlansInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a cost center.
   * 
   * @param request - DeleteCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCostUnitResponse
   */
  async deleteCostUnitWithOptions(request: DeleteCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCostUnitResponse>(await this.callApi(params, req, runtime), new DeleteCostUnitResponse({}));
  }

  /**
   * Deletes a cost center.
   * 
   * @param request - DeleteCostUnitRequest
   * @returns DeleteCostUnitResponse
   */
  async deleteCostUnit(request: DeleteCostUnitRequest): Promise<DeleteCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCostUnitWithOptions(request, runtime);
  }

  /**
   * Query the summary information of the user "Cost Management-Budget".
   * 
   * @remarks
   * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
   * 
   * @param request - DescribeCostBudgetsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummaryWithOptions(request: DescribeCostBudgetsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCostBudgetsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.budgetName)) {
      query["BudgetName"] = request.budgetName;
    }

    if (!Util.isUnset(request.budgetStatus)) {
      query["BudgetStatus"] = request.budgetStatus;
    }

    if (!Util.isUnset(request.budgetType)) {
      query["BudgetType"] = request.budgetType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCostBudgetsSummary",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCostBudgetsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeCostBudgetsSummaryResponse({}));
  }

  /**
   * Query the summary information of the user "Cost Management-Budget".
   * 
   * @remarks
   * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
   * 
   * @param request - DescribeCostBudgetsSummaryRequest
   * @returns DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummary(request: DescribeCostBudgetsSummaryRequest): Promise<DescribeCostBudgetsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCostBudgetsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the monthly allocated costs of instances by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request: DescribeInstanceAmortizedCostByAmortizationPeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * Queries the monthly allocated costs of instances by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriod(request: DescribeInstanceAmortizedCostByAmortizationPeriodRequest): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * 实例摊销日摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request: DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationDateEnd)) {
      body["AmortizationDateEnd"] = request.amortizationDateEnd;
    }

    if (!Util.isUnset(request.amortizationDateStart)) {
      body["AmortizationDateStart"] = request.amortizationDateStart;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriodDate",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse({}));
  }

  /**
   * 实例摊销日摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodDate(request: DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request, runtime);
  }

  /**
   * 实例账期月摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByConsumePeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByConsumePeriodResponse
   */
  async describeInstanceAmortizedCostByConsumePeriodWithOptions(request: DescribeInstanceAmortizedCostByConsumePeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByConsumePeriodResponse({}));
  }

  /**
   * 实例账期月摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByConsumePeriodRequest
   * @returns DescribeInstanceAmortizedCostByConsumePeriodResponse
   */
  async describeInstanceAmortizedCostByConsumePeriod(request: DescribeInstanceAmortizedCostByConsumePeriodRequest): Promise<DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
   * Queries the billing information about instances or billable items in a billing cycle.
   * 
   * @remarks
   *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
   * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
   * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
   * 
   * @param request - DescribeInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceBillResponse
   */
  async describeInstanceBillWithOptions(request: DescribeInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!Util.isUnset(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pipCode)) {
      query["PipCode"] = request.pipCode;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceBillResponse>(await this.callApi(params, req, runtime), new DescribeInstanceBillResponse({}));
  }

  /**
   * Queries the billing information about instances or billable items in a billing cycle.
   * 
   * @remarks
   *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
   * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
   * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
   * 
   * @param request - DescribeInstanceBillRequest
   * @returns DescribeInstanceBillResponse
   */
  async describeInstanceBill(request: DescribeInstanceBillRequest): Promise<DescribeInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceBillWithOptions(request, runtime);
  }

  /**
   * 实例摊销日抵扣还原摊销成本
   * 
   * @param request - DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceDeductAmortizedCostByAmortizationPeriodWithOptions(request: DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDeductAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * 实例摊销日抵扣还原摊销成本
   * 
   * @param request - DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceDeductAmortizedCostByAmortizationPeriod(request: DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest): Promise<DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDeductAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * Queries the pricing information about an Alibaba Cloud service.
   * 
   * @param request - DescribePricingModuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePricingModuleResponse
   */
  async describePricingModuleWithOptions(request: DescribePricingModuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePricingModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePricingModule",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePricingModuleResponse>(await this.callApi(params, req, runtime), new DescribePricingModuleResponse({}));
  }

  /**
   * Queries the pricing information about an Alibaba Cloud service.
   * 
   * @param request - DescribePricingModuleRequest
   * @returns DescribePricingModuleResponse
   */
  async describePricingModule(request: DescribePricingModuleRequest): Promise<DescribePricingModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePricingModuleWithOptions(request, runtime);
  }

  /**
   * Queries the allocated costs of services by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeProductAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriodWithOptions(request: DescribeProductAmortizedCostByAmortizationPeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new DescribeProductAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * Queries the allocated costs of services by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeProductAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriod(request: DescribeProductAmortizedCostByAmortizationPeriodRequest): Promise<DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * 产品账期月摊销成本
   * 
   * @param request - DescribeProductAmortizedCostByConsumePeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductAmortizedCostByConsumePeriodResponse
   */
  async describeProductAmortizedCostByConsumePeriodWithOptions(request: DescribeProductAmortizedCostByConsumePeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductAmortizedCostByConsumePeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new DescribeProductAmortizedCostByConsumePeriodResponse({}));
  }

  /**
   * 产品账期月摊销成本
   * 
   * @param request - DescribeProductAmortizedCostByConsumePeriodRequest
   * @returns DescribeProductAmortizedCostByConsumePeriodResponse
   */
  async describeProductAmortizedCostByConsumePeriod(request: DescribeProductAmortizedCostByConsumePeriodRequest): Promise<DescribeProductAmortizedCostByConsumePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
   * Queries the coverage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * 1\\. The queried coverage details are the same as those displayed in the table on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * 2\\. You can call this operation to query the coverage details of RIs or SCUs.
   * 3\\. You can call this operation to query coverage details at an hourly, daily, or monthly granularity.
   * 
   * @param request - DescribeResourceCoverageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetailWithOptions(request: DescribeResourceCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceCoverageDetailResponse>(await this.callApi(params, req, runtime), new DescribeResourceCoverageDetailResponse({}));
  }

  /**
   * Queries the coverage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * 1\\. The queried coverage details are the same as those displayed in the table on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * 2\\. You can call this operation to query the coverage details of RIs or SCUs.
   * 3\\. You can call this operation to query coverage details at an hourly, daily, or monthly granularity.
   * 
   * @param request - DescribeResourceCoverageDetailRequest
   * @returns DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetail(request: DescribeResourceCoverageDetailRequest): Promise<DescribeResourceCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total coverage data of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * The queried total coverage data is the same as the aggregated data displayed on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * You can call this operation to query the total coverage data of RIs or SCUs.
   * 
   * @param request - DescribeResourceCoverageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotalWithOptions(request: DescribeResourceCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceCoverageTotalResponse>(await this.callApi(params, req, runtime), new DescribeResourceCoverageTotalResponse({}));
  }

  /**
   * Queries the total coverage data of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * The queried total coverage data is the same as the aggregated data displayed on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * You can call this operation to query the total coverage data of RIs or SCUs.
   * 
   * @param request - DescribeResourceCoverageTotalRequest
   * @returns DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotal(request: DescribeResourceCoverageTotalRequest): Promise<DescribeResourceCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource plans of an Alibaba Cloud service.
   * 
   * @param request - DescribeResourcePackageProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcePackageProductResponse
   */
  async describeResourcePackageProductWithOptions(request: DescribeResourcePackageProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackageProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourcePackageProduct",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourcePackageProductResponse>(await this.callApi(params, req, runtime), new DescribeResourcePackageProductResponse({}));
  }

  /**
   * Queries the information about resource plans of an Alibaba Cloud service.
   * 
   * @param request - DescribeResourcePackageProductRequest
   * @returns DescribeResourcePackageProductResponse
   */
  async describeResourcePackageProduct(request: DescribeResourcePackageProductRequest): Promise<DescribeResourcePackageProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackageProductWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceUsageDetailResponse
   */
  async describeResourceUsageDetailWithOptions(request: DescribeResourceUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceUsageDetailResponse>(await this.callApi(params, req, runtime), new DescribeResourceUsageDetailResponse({}));
  }

  /**
   * Queries the usage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageDetailRequest
   * @returns DescribeResourceUsageDetailResponse
   */
  async describeResourceUsageDetail(request: DescribeResourceUsageDetailRequest): Promise<DescribeResourceUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total usage data of reserved instances or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceUsageTotalResponse
   */
  async describeResourceUsageTotalWithOptions(request: DescribeResourceUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceUsageTotalResponse>(await this.callApi(params, req, runtime), new DescribeResourceUsageTotalResponse({}));
  }

  /**
   * Queries the total usage data of reserved instances or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageTotalRequest
   * @returns DescribeResourceUsageTotalResponse
   */
  async describeResourceUsageTotal(request: DescribeResourceUsageTotalRequest): Promise<DescribeResourceUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the coverage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansCoverageDetailResponse
   */
  async describeSavingsPlansCoverageDetailWithOptions(request: DescribeSavingsPlansCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansCoverageDetailResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansCoverageDetailResponse({}));
  }

  /**
   * Queries the coverage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageDetailRequest
   * @returns DescribeSavingsPlansCoverageDetailResponse
   */
  async describeSavingsPlansCoverageDetail(request: DescribeSavingsPlansCoverageDetailRequest): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the coverage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansCoverageTotalResponse
   */
  async describeSavingsPlansCoverageTotalWithOptions(request: DescribeSavingsPlansCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansCoverageTotalResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansCoverageTotalResponse({}));
  }

  /**
   * Queries the coverage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageTotalRequest
   * @returns DescribeSavingsPlansCoverageTotalResponse
   */
  async describeSavingsPlansCoverageTotal(request: DescribeSavingsPlansCoverageTotalRequest): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansUsageDetailResponse
   */
  async describeSavingsPlansUsageDetailWithOptions(request: DescribeSavingsPlansUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansUsageDetailResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansUsageDetailResponse({}));
  }

  /**
   * Queries the usage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageDetailRequest
   * @returns DescribeSavingsPlansUsageDetailResponse
   */
  async describeSavingsPlansUsageDetail(request: DescribeSavingsPlansUsageDetailRequest): Promise<DescribeSavingsPlansUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the usage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansUsageTotalResponse
   */
  async describeSavingsPlansUsageTotalWithOptions(request: DescribeSavingsPlansUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansUsageTotalResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansUsageTotalResponse({}));
  }

  /**
   * Queries the usage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageTotalRequest
   * @returns DescribeSavingsPlansUsageTotalResponse
   */
  async describeSavingsPlansUsageTotal(request: DescribeSavingsPlansUsageTotalRequest): Promise<DescribeSavingsPlansUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageTotalWithOptions(request, runtime);
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   The data that you query by calling this operation is the same as the data that is queried by billing cycles in the Split Bill module of Cost Allocation.
   * *   You can query split bills that were generated within the last 12 months by calling this operation.
   * *   You can query split bills only after you enable the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in the User Center console.
   * 
   * @param request - DescribeSplitItemBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSplitItemBillResponse
   */
  async describeSplitItemBillWithOptions(request: DescribeSplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSplitItemBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pipCode)) {
      query["PipCode"] = request.pipCode;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.splitItemID)) {
      query["SplitItemID"] = request.splitItemID;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSplitItemBillResponse>(await this.callApi(params, req, runtime), new DescribeSplitItemBillResponse({}));
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   The data that you query by calling this operation is the same as the data that is queried by billing cycles in the Split Bill module of Cost Allocation.
   * *   You can query split bills that were generated within the last 12 months by calling this operation.
   * *   You can query split bills only after you enable the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in the User Center console.
   * 
   * @param request - DescribeSplitItemBillRequest
   * @returns DescribeSplitItemBillResponse
   */
  async describeSplitItemBill(request: DescribeSplitItemBillRequest): Promise<DescribeSplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSplitItemBillWithOptions(request, runtime);
  }

  /**
   * Queries the details of a financial relationship.
   * 
   * @param request - GetAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountRelationResponse
   */
  async getAccountRelationWithOptions(request: GetAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountRelationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountRelationResponse>(await this.callApi(params, req, runtime), new GetAccountRelationResponse({}));
  }

  /**
   * Queries the details of a financial relationship.
   * 
   * @param request - GetAccountRelationRequest
   * @returns GetAccountRelationResponse
   */
  async getAccountRelation(request: GetAccountRelationRequest): Promise<GetAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountRelationWithOptions(request, runtime);
  }

  /**
   * Queries the account information about a customer of a virtual network operator (VNO).
   * 
   * @param request - GetCustomerAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerAccountInfoResponse
   */
  async getCustomerAccountInfoWithOptions(request: GetCustomerAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerAccountInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomerAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerAccountInfoResponse>(await this.callApi(params, req, runtime), new GetCustomerAccountInfoResponse({}));
  }

  /**
   * Queries the account information about a customer of a virtual network operator (VNO).
   * 
   * @param request - GetCustomerAccountInfoRequest
   * @returns GetCustomerAccountInfoResponse
   */
  async getCustomerAccountInfo(request: GetCustomerAccountInfoRequest): Promise<GetCustomerAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerAccountInfoWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of customers of a virtual network operator (VNO).
   * 
   * @remarks
   * The system queries the IDs of customers of a VNO based on the AccessKey pair used in the request.
   * 
   * @param request - GetCustomerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerListResponse
   */
  async getCustomerListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCustomerListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCustomerList",
      version: "2017-12-14",
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

  /**
   * Queries the IDs of customers of a virtual network operator (VNO).
   * 
   * @remarks
   * The system queries the IDs of customers of a VNO based on the AccessKey pair used in the request.
   * @returns GetCustomerListResponse
   */
  async getCustomerList(): Promise<GetCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerListWithOptions(runtime);
  }

  /**
   * Queries the details of an order that belongs to your Alibaba Cloud account or distributors.
   * 
   * @param request - GetOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderDetailResponse
   */
  async getOrderDetailWithOptions(request: GetOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderDetailResponse>(await this.callApi(params, req, runtime), new GetOrderDetailResponse({}));
  }

  /**
   * Queries the details of an order that belongs to your Alibaba Cloud account or distributors.
   * 
   * @param request - GetOrderDetailRequest
   * @returns GetOrderDetailResponse
   */
  async getOrderDetail(request: GetOrderDetailRequest): Promise<GetOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the pay-as-you-go price of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Usage notes
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
   * 
   * @param request - GetPayAsYouGoPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPriceWithOptions(request: GetPayAsYouGoPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetPayAsYouGoPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPayAsYouGoPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPayAsYouGoPriceResponse>(await this.callApi(params, req, runtime), new GetPayAsYouGoPriceResponse({}));
  }

  /**
   * Queries the pay-as-you-go price of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Usage notes
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
   * 
   * @param request - GetPayAsYouGoPriceRequest
   * @returns GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPrice(request: GetPayAsYouGoPriceRequest): Promise<GetPayAsYouGoPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayAsYouGoPriceWithOptions(request, runtime);
  }

  /**
   * Queries the price of a resource plan.
   * 
   * @param request - GetResourcePackagePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePackagePriceResponse
   */
  async getResourcePackagePriceWithOptions(request: GetResourcePackagePriceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePackagePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePackagePrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePackagePriceResponse>(await this.callApi(params, req, runtime), new GetResourcePackagePriceResponse({}));
  }

  /**
   * Queries the price of a resource plan.
   * 
   * @param request - GetResourcePackagePriceRequest
   * @returns GetResourcePackagePriceResponse
   */
  async getResourcePackagePrice(request: GetResourcePackagePriceRequest): Promise<GetResourcePackagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePackagePriceWithOptions(request, runtime);
  }

  /**
   * Queries the subscription price of an Alibaba Cloud service.
   * 
   * @remarks
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
   * 
   * @param request - GetSubscriptionPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionPriceResponse
   */
  async getSubscriptionPriceWithOptions(request: GetSubscriptionPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.servicePeriodQuantity)) {
      query["ServicePeriodQuantity"] = request.servicePeriodQuantity;
    }

    if (!Util.isUnset(request.servicePeriodUnit)) {
      query["ServicePeriodUnit"] = request.servicePeriodUnit;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubscriptionPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubscriptionPriceResponse>(await this.callApi(params, req, runtime), new GetSubscriptionPriceResponse({}));
  }

  /**
   * Queries the subscription price of an Alibaba Cloud service.
   * 
   * @remarks
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
   * 
   * @param request - GetSubscriptionPriceRequest
   * @returns GetSubscriptionPriceResponse
   */
  async getSubscriptionPrice(request: GetSubscriptionPriceRequest): Promise<GetSubscriptionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubscriptionPriceWithOptions(request, runtime);
  }

  /**
   * Queries the refundable amount for an instance from which you want to unsubscribe.
   * 
   * @remarks
   * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
   * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/zh/user-center/user-guide/refund-rules).
   * 
   * @param request - InquiryPriceRefundInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstanceWithOptions(request: InquiryPriceRefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<InquiryPriceRefundInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InquiryPriceRefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InquiryPriceRefundInstanceResponse>(await this.callApi(params, req, runtime), new InquiryPriceRefundInstanceResponse({}));
  }

  /**
   * Queries the refundable amount for an instance from which you want to unsubscribe.
   * 
   * @remarks
   * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
   * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/zh/user-center/user-guide/refund-rules).
   * 
   * @param request - InquiryPriceRefundInstanceRequest
   * @returns InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstance(request: InquiryPriceRefundInstanceRequest): Promise<InquiryPriceRefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inquiryPriceRefundInstanceWithOptions(request, runtime);
  }

  /**
   * Adds or removes permissions granted to a member in a financial relationship.
   * 
   * @param request - ModifyAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountRelationResponse
   */
  async modifyAccountRelationWithOptions(request: ModifyAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationOperation)) {
      query["RelationOperation"] = request.relationOperation;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountRelationResponse>(await this.callApi(params, req, runtime), new ModifyAccountRelationResponse({}));
  }

  /**
   * Adds or removes permissions granted to a member in a financial relationship.
   * 
   * @param request - ModifyAccountRelationRequest
   * @returns ModifyAccountRelationResponse
   */
  async modifyAccountRelation(request: ModifyAccountRelationRequest): Promise<ModifyAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountRelationWithOptions(request, runtime);
  }

  /**
   * Modifies one or more cost centers.
   * 
   * @param request - ModifyCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCostUnitResponse
   */
  async modifyCostUnitWithOptions(request: ModifyCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCostUnitResponse>(await this.callApi(params, req, runtime), new ModifyCostUnitResponse({}));
  }

  /**
   * Modifies one or more cost centers.
   * 
   * @param request - ModifyCostUnitRequest
   * @returns ModifyCostUnitResponse
   */
  async modifyCostUnit(request: ModifyCostUnitRequest): Promise<ModifyCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCostUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an instance. When you call this operation, the system generates a modification order and automatically completes the payment. You cannot call this operation to modify the configurations of an Elastic Compute Service (ECS) instance or ApsaraDB RDS instance. To modify the configurations of an ECS or ApsaraDB RDS instance, call the dedicated operation of the corresponding service.
   * 
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  /**
   * Modifies the configurations of an instance. When you call this operation, the system generates a modification order and automatically completes the payment. You cannot call this operation to modify the configurations of an Elastic Compute Service (ECS) instance or ApsaraDB RDS instance. To modify the configurations of an ECS or ApsaraDB RDS instance, call the dedicated operation of the corresponding service.
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the balance of your account.
   * 
   * @param request - QueryAccountBalanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountBalanceResponse
   */
  async queryAccountBalanceWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAccountBalanceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryAccountBalance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountBalanceResponse>(await this.callApi(params, req, runtime), new QueryAccountBalanceResponse({}));
  }

  /**
   * Queries the balance of your account.
   * @returns QueryAccountBalanceResponse
   */
  async queryAccountBalance(): Promise<QueryAccountBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBalanceWithOptions(runtime);
  }

  /**
   * Queries the bills of your Alibaba Cloud account within a billing cycle. You can summarize the bills by resource owner.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
   * 
   * @param request - QueryAccountBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountBillResponse
   */
  async queryAccountBillWithOptions(request: QueryAccountBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isGroupByProduct)) {
      query["IsGroupByProduct"] = request.isGroupByProduct;
    }

    if (!Util.isUnset(request.ownerID)) {
      query["OwnerID"] = request.ownerID;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountBillResponse>(await this.callApi(params, req, runtime), new QueryAccountBillResponse({}));
  }

  /**
   * Queries the bills of your Alibaba Cloud account within a billing cycle. You can summarize the bills by resource owner.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
   * 
   * @param request - QueryAccountBillRequest
   * @returns QueryAccountBillResponse
   */
  async queryAccountBill(request: QueryAccountBillRequest): Promise<QueryAccountBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBillWithOptions(request, runtime);
  }

  /**
   * Queries the details of transactions within your account.
   * 
   * @param request - QueryAccountTransactionDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTransactionDetailsResponse
   */
  async queryAccountTransactionDetailsWithOptions(request: QueryAccountTransactionDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!Util.isUnset(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!Util.isUnset(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!Util.isUnset(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountTransactionDetails",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountTransactionDetailsResponse>(await this.callApi(params, req, runtime), new QueryAccountTransactionDetailsResponse({}));
  }

  /**
   * Queries the details of transactions within your account.
   * 
   * @param request - QueryAccountTransactionDetailsRequest
   * @returns QueryAccountTransactionDetailsResponse
   */
  async queryAccountTransactionDetails(request: QueryAccountTransactionDetailsRequest): Promise<QueryAccountTransactionDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionDetailsWithOptions(request, runtime);
  }

  /**
   * Queries transactions within your Alibaba Cloud account.
   * 
   * @param request - QueryAccountTransactionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTransactionsResponse
   */
  async queryAccountTransactionsWithOptions(request: QueryAccountTransactionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!Util.isUnset(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!Util.isUnset(request.transactionFlow)) {
      query["TransactionFlow"] = request.transactionFlow;
    }

    if (!Util.isUnset(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!Util.isUnset(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountTransactions",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountTransactionsResponse>(await this.callApi(params, req, runtime), new QueryAccountTransactionsResponse({}));
  }

  /**
   * Queries transactions within your Alibaba Cloud account.
   * 
   * @param request - QueryAccountTransactionsRequest
   * @returns QueryAccountTransactionsResponse
   */
  async queryAccountTransactions(request: QueryAccountTransactionsRequest): Promise<QueryAccountTransactionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionsWithOptions(request, runtime);
  }

  /**
   * Queries available instances.
   * 
   * @param request - QueryAvailableInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableInstancesResponse
   */
  async queryAvailableInstancesWithOptions(request: QueryAvailableInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvailableInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!Util.isUnset(request.endTimeStart)) {
      query["EndTimeStart"] = request.endTimeStart;
    }

    if (!Util.isUnset(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvailableInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvailableInstancesResponse>(await this.callApi(params, req, runtime), new QueryAvailableInstancesResponse({}));
  }

  /**
   * Queries available instances.
   * 
   * @param request - QueryAvailableInstancesRequest
   * @returns QueryAvailableInstancesResponse
   */
  async queryAvailableInstances(request: QueryAvailableInstancesRequest): Promise<QueryAvailableInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the bills in a billing cycle.
   * 
   * @param request - QueryBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillResponse
   */
  async queryBillWithOptions(request: QueryBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillResponse>(await this.callApi(params, req, runtime), new QueryBillResponse({}));
  }

  /**
   * Queries the bills in a billing cycle.
   * 
   * @param request - QueryBillRequest
   * @returns QueryBillResponse
   */
  async queryBill(request: QueryBillRequest): Promise<QueryBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillWithOptions(request, runtime);
  }

  /**
   * Queries the bill overview information in a billing cycle.
   * 
   * @param request - QueryBillOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillOverviewResponse
   */
  async queryBillOverviewWithOptions(request: QueryBillOverviewRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBillOverview",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillOverviewResponse>(await this.callApi(params, req, runtime), new QueryBillOverviewResponse({}));
  }

  /**
   * Queries the bill overview information in a billing cycle.
   * 
   * @param request - QueryBillOverviewRequest
   * @returns QueryBillOverviewResponse
   */
  async queryBillOverview(request: QueryBillOverviewRequest): Promise<QueryBillOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the subscribed bills that are stored in Object Storage Service (OSS) bucket.
   * 
   * @param request - QueryBillToOSSSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillToOSSSubscriptionResponse
   */
  async queryBillToOSSSubscriptionWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryBillToOSSSubscriptionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryBillToOSSSubscription",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillToOSSSubscriptionResponse>(await this.callApi(params, req, runtime), new QueryBillToOSSSubscriptionResponse({}));
  }

  /**
   * Queries the subscribed bills that are stored in Object Storage Service (OSS) bucket.
   * @returns QueryBillToOSSSubscriptionResponse
   */
  async queryBillToOSSSubscription(): Promise<QueryBillToOSSSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillToOSSSubscriptionWithOptions(runtime);
  }

  /**
   * Queries the information about vouchers.
   * 
   * @param request - QueryCashCouponsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCashCouponsResponse
   */
  async queryCashCouponsWithOptions(request: QueryCashCouponsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCashCouponsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCashCoupons",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCashCouponsResponse>(await this.callApi(params, req, runtime), new QueryCashCouponsResponse({}));
  }

  /**
   * Queries the information about vouchers.
   * 
   * @param request - QueryCashCouponsRequest
   * @returns QueryCashCouponsResponse
   */
  async queryCashCoupons(request: QueryCashCouponsRequest): Promise<QueryCashCouponsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCashCouponsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service based on the service code.
   * 
   * @remarks
   * You can call this operation to query the information about a service based on the service code.
   * 
   * @param request - QueryCommodityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommodityListResponse
   */
  async queryCommodityListWithOptions(request: QueryCommodityListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCommodityListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCommodityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCommodityListResponse>(await this.callApi(params, req, runtime), new QueryCommodityListResponse({}));
  }

  /**
   * Queries the information about a service based on the service code.
   * 
   * @remarks
   * You can call this operation to query the information about a service based on the service code.
   * 
   * @param request - QueryCommodityListRequest
   * @returns QueryCommodityListResponse
   */
  async queryCommodityList(request: QueryCommodityListRequest): Promise<QueryCommodityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCommodityListWithOptions(request, runtime);
  }

  /**
   * Queries all cost centers within the current node of the cost center tree. If the ParentUnitId parameter is set to -1, all cost centers are queried.
   * 
   * @param request - QueryCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostUnitResponse
   */
  async queryCostUnitWithOptions(request: QueryCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentUnitId)) {
      query["ParentUnitId"] = request.parentUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCostUnitResponse>(await this.callApi(params, req, runtime), new QueryCostUnitResponse({}));
  }

  /**
   * Queries all cost centers within the current node of the cost center tree. If the ParentUnitId parameter is set to -1, all cost centers are queried.
   * 
   * @param request - QueryCostUnitRequest
   * @returns QueryCostUnitResponse
   */
  async queryCostUnit(request: QueryCostUnitRequest): Promise<QueryCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitWithOptions(request, runtime);
  }

  /**
   * Queries the resource instances that are allocated to a cost center. If the unitId parameter is set to 0, the unallocated primary resource instances and sub-resource instances are queried.
   * 
   * @param request - QueryCostUnitResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostUnitResourceResponse
   */
  async queryCostUnitResourceWithOptions(request: QueryCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCostUnitResourceResponse>(await this.callApi(params, req, runtime), new QueryCostUnitResourceResponse({}));
  }

  /**
   * Queries the resource instances that are allocated to a cost center. If the unitId parameter is set to 0, the unallocated primary resource instances and sub-resource instances are queried.
   * 
   * @param request - QueryCostUnitResourceRequest
   * @returns QueryCostUnitResourceResponse
   */
  async queryCostUnitResource(request: QueryCostUnitResourceRequest): Promise<QueryCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitResourceWithOptions(request, runtime);
  }

  /**
   * Queries the addresses to which invoices are mailed.
   * 
   * @param request - QueryCustomerAddressListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomerAddressListResponse
   */
  async queryCustomerAddressListWithOptions(request: QueryCustomerAddressListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomerAddressListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustomerAddressList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomerAddressListResponse>(await this.callApi(params, req, runtime), new QueryCustomerAddressListResponse({}));
  }

  /**
   * Queries the addresses to which invoices are mailed.
   * 
   * @param request - QueryCustomerAddressListRequest
   * @returns QueryCustomerAddressListResponse
   */
  async queryCustomerAddressList(request: QueryCustomerAddressListRequest): Promise<QueryCustomerAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomerAddressListWithOptions(request, runtime);
  }

  /**
   * Queries the usage of resource plans, including reserved instances (RIs) and storage capacity units (SCUs).
   * 
   * @remarks
   * Limits:
   * *   Only the usage records within the past year can be queried.
   * 
   * @param request - QueryDPUtilizationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetailWithOptions(request: QueryDPUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDPUtilizationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.includeShare)) {
      query["IncludeShare"] = request.includeShare;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.lastToken)) {
      query["LastToken"] = request.lastToken;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDPUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDPUtilizationDetailResponse>(await this.callApi(params, req, runtime), new QueryDPUtilizationDetailResponse({}));
  }

  /**
   * Queries the usage of resource plans, including reserved instances (RIs) and storage capacity units (SCUs).
   * 
   * @remarks
   * Limits:
   * *   Only the usage records within the past year can be queried.
   * 
   * @param request - QueryDPUtilizationDetailRequest
   * @returns QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetail(request: QueryDPUtilizationDetailRequest): Promise<QueryDPUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDPUtilizationDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about the orders for which you want to apply for invoices.
   * 
   * @param request - QueryEvaluateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEvaluateListResponse
   */
  async queryEvaluateListWithOptions(request: QueryEvaluateListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEvaluateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!Util.isUnset(request.bizTypeList)) {
      query["BizTypeList"] = request.bizTypeList;
    }

    if (!Util.isUnset(request.endAmount)) {
      query["EndAmount"] = request.endAmount;
    }

    if (!Util.isUnset(request.endBizTime)) {
      query["EndBizTime"] = request.endBizTime;
    }

    if (!Util.isUnset(request.endSearchTime)) {
      query["EndSearchTime"] = request.endSearchTime;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.startAmount)) {
      query["StartAmount"] = request.startAmount;
    }

    if (!Util.isUnset(request.startBizTime)) {
      query["StartBizTime"] = request.startBizTime;
    }

    if (!Util.isUnset(request.startSearchTime)) {
      query["StartSearchTime"] = request.startSearchTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEvaluateList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEvaluateListResponse>(await this.callApi(params, req, runtime), new QueryEvaluateListResponse({}));
  }

  /**
   * Queries the information about the orders for which you want to apply for invoices.
   * 
   * @param request - QueryEvaluateListRequest
   * @returns QueryEvaluateListResponse
   */
  async queryEvaluateList(request: QueryEvaluateListRequest): Promise<QueryEvaluateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEvaluateListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a financial account.
   * 
   * @param request - QueryFinancialAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFinancialAccountInfoResponse
   */
  async queryFinancialAccountInfoWithOptions(request: QueryFinancialAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryFinancialAccountInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFinancialAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFinancialAccountInfoResponse>(await this.callApi(params, req, runtime), new QueryFinancialAccountInfoResponse({}));
  }

  /**
   * Queries the information about a financial account.
   * 
   * @param request - QueryFinancialAccountInfoRequest
   * @returns QueryFinancialAccountInfoResponse
   */
  async queryFinancialAccountInfo(request: QueryFinancialAccountInfoRequest): Promise<QueryFinancialAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFinancialAccountInfoWithOptions(request, runtime);
  }

  /**
   * Queries the bills of instances or billable items in a billing cycle.
   * 
   * @remarks
   * ##
   * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](https://help.aliyun.com/document_detail/209402.html) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
   * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
   * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
   * 
   * @param request - QueryInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceBillResponse
   */
  async queryInstanceBillWithOptions(request: QueryInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceBillResponse>(await this.callApi(params, req, runtime), new QueryInstanceBillResponse({}));
  }

  /**
   * Queries the bills of instances or billable items in a billing cycle.
   * 
   * @remarks
   * ##
   * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](https://help.aliyun.com/document_detail/209402.html) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
   * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
   * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
   * 
   * @param request - QueryInstanceBillRequest
   * @returns QueryInstanceBillResponse
   */
  async queryInstanceBill(request: QueryInstanceBillRequest): Promise<QueryInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceBillWithOptions(request, runtime);
  }

  /**
   * Queries instances by tag.
   * 
   * @param request - QueryInstanceByTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceByTagResponse
   */
  async queryInstanceByTagWithOptions(request: QueryInstanceByTagRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceByTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceByTag",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceByTagResponse>(await this.callApi(params, req, runtime), new QueryInstanceByTagResponse({}));
  }

  /**
   * Queries instances by tag.
   * 
   * @param request - QueryInstanceByTagRequest
   * @returns QueryInstanceByTagResponse
   */
  async queryInstanceByTag(request: QueryInstanceByTagRequest): Promise<QueryInstanceByTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceByTagWithOptions(request, runtime);
  }

  /**
   * The code of the service.
   * 
   * @param request - QueryInstanceGaapCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceGaapCostResponse
   */
  async queryInstanceGaapCostWithOptions(request: QueryInstanceGaapCostRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceGaapCostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceGaapCost",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceGaapCostResponse>(await this.callApi(params, req, runtime), new QueryInstanceGaapCostResponse({}));
  }

  /**
   * The code of the service.
   * 
   * @param request - QueryInstanceGaapCostRequest
   * @returns QueryInstanceGaapCostResponse
   */
  async queryInstanceGaapCost(request: QueryInstanceGaapCostRequest): Promise<QueryInstanceGaapCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceGaapCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about invoice titles.
   * 
   * @param request - QueryInvoicingCustomerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInvoicingCustomerListResponse
   */
  async queryInvoicingCustomerListWithOptions(request: QueryInvoicingCustomerListRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvoicingCustomerListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInvoicingCustomerList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInvoicingCustomerListResponse>(await this.callApi(params, req, runtime), new QueryInvoicingCustomerListResponse({}));
  }

  /**
   * Queries the information about invoice titles.
   * 
   * @param request - QueryInvoicingCustomerListRequest
   * @returns QueryInvoicingCustomerListResponse
   */
  async queryInvoicingCustomerList(request: QueryInvoicingCustomerListRequest): Promise<QueryInvoicingCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvoicingCustomerListWithOptions(request, runtime);
  }

  /**
   * Queries the orders of your Alibaba Cloud account or distributors. By default, orders within the last hour are queried. To query earlier orders, specify the CreateTimeStart and CreateTimeEnd parameters.
   * 
   * @param request - QueryOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrdersResponse
   */
  async queryOrdersWithOptions(request: QueryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paymentStatus)) {
      query["PaymentStatus"] = request.paymentStatus;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrders",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrdersResponse>(await this.callApi(params, req, runtime), new QueryOrdersResponse({}));
  }

  /**
   * Queries the orders of your Alibaba Cloud account or distributors. By default, orders within the last hour are queried. To query earlier orders, specify the CreateTimeStart and CreateTimeEnd parameters.
   * 
   * @param request - QueryOrdersRequest
   * @returns QueryOrdersResponse
   */
  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrdersWithOptions(request, runtime);
  }

  /**
   * Queries, by relationship ID, permissions granted to accounts between which a management-member relationship is established.
   * 
   * @param request - QueryPermissionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPermissionListResponse
   */
  async queryPermissionListWithOptions(request: QueryPermissionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPermissionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPermissionList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPermissionListResponse>(await this.callApi(params, req, runtime), new QueryPermissionListResponse({}));
  }

  /**
   * Queries, by relationship ID, permissions granted to accounts between which a management-member relationship is established.
   * 
   * @param request - QueryPermissionListRequest
   * @returns QueryPermissionListResponse
   */
  async queryPermissionList(request: QueryPermissionListRequest): Promise<QueryPermissionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPermissionListWithOptions(request, runtime);
  }

  /**
   * Queries prepaid cards.
   * 
   * @param request - QueryPrepaidCardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPrepaidCardsResponse
   */
  async queryPrepaidCardsWithOptions(request: QueryPrepaidCardsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPrepaidCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPrepaidCards",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPrepaidCardsResponse>(await this.callApi(params, req, runtime), new QueryPrepaidCardsResponse({}));
  }

  /**
   * Queries prepaid cards.
   * 
   * @param request - QueryPrepaidCardsRequest
   * @returns QueryPrepaidCardsResponse
   */
  async queryPrepaidCards(request: QueryPrepaidCardsRequest): Promise<QueryPrepaidCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPrepaidCardsWithOptions(request, runtime);
  }

  /**
   * Queries the billable items of a service.
   * 
   * @remarks
   * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
   * 
   * @param request - QueryPriceEntityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPriceEntityListResponse
   */
  async queryPriceEntityListWithOptions(request: QueryPriceEntityListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPriceEntityListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPriceEntityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPriceEntityListResponse>(await this.callApi(params, req, runtime), new QueryPriceEntityListResponse({}));
  }

  /**
   * Queries the billable items of a service.
   * 
   * @remarks
   * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
   * 
   * @param request - QueryPriceEntityListRequest
   * @returns QueryPriceEntityListResponse
   */
  async queryPriceEntityList(request: QueryPriceEntityListRequest): Promise<QueryPriceEntityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPriceEntityListWithOptions(request, runtime);
  }

  /**
   * Queries the information about all Alibaba Cloud services.
   * 
   * @param request - QueryProductListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductListResponse
   */
  async queryProductListWithOptions(request: QueryProductListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryTotalCount)) {
      query["QueryTotalCount"] = request.queryTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProductList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryProductListResponse>(await this.callApi(params, req, runtime), new QueryProductListResponse({}));
  }

  /**
   * Queries the information about all Alibaba Cloud services.
   * 
   * @param request - QueryProductListRequest
   * @returns QueryProductListResponse
   */
  async queryProductList(request: QueryProductListRequest): Promise<QueryProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of a reserved instance (RI).
   * 
   * @param request - QueryRIUtilizationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRIUtilizationDetailResponse
   */
  async queryRIUtilizationDetailWithOptions(request: QueryRIUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRIUtilizationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.RICommodityCode)) {
      query["RICommodityCode"] = request.RICommodityCode;
    }

    if (!Util.isUnset(request.RIInstanceId)) {
      query["RIInstanceId"] = request.RIInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRIUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRIUtilizationDetailResponse>(await this.callApi(params, req, runtime), new QueryRIUtilizationDetailResponse({}));
  }

  /**
   * Queries the usage details of a reserved instance (RI).
   * 
   * @param request - QueryRIUtilizationDetailRequest
   * @returns QueryRIUtilizationDetailResponse
   */
  async queryRIUtilizationDetail(request: QueryRIUtilizationDetailRequest): Promise<QueryRIUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRIUtilizationDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a redemption coupon.
   * 
   * @param request - QueryRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRedeemResponse
   */
  async queryRedeemWithOptions(request: QueryRedeemRequest, runtime: $Util.RuntimeOptions): Promise<QueryRedeemResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRedeem",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRedeemResponse>(await this.callApi(params, req, runtime), new QueryRedeemResponse({}));
  }

  /**
   * Queries the information about a redemption coupon.
   * 
   * @param request - QueryRedeemRequest
   * @returns QueryRedeemResponse
   */
  async queryRedeem(request: QueryRedeemRequest): Promise<QueryRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRedeemWithOptions(request, runtime);
  }

  /**
   * Queries the members of a management account.
   * 
   * @param request - QueryRelationListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRelationListResponse
   */
  async queryRelationListWithOptions(request: QueryRelationListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRelationListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRelationList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRelationListResponse>(await this.callApi(params, req, runtime), new QueryRelationListResponse({}));
  }

  /**
   * Queries the members of a management account.
   * 
   * @param request - QueryRelationListRequest
   * @returns QueryRelationListResponse
   */
  async queryRelationList(request: QueryRelationListRequest): Promise<QueryRelationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRelationListWithOptions(request, runtime);
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - QueryResellerAvailableQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResellerAvailableQuotaResponse
   */
  async queryResellerAvailableQuotaWithOptions(request: QueryResellerAvailableQuotaRequest, runtime: $Util.RuntimeOptions): Promise<QueryResellerAvailableQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemCodes)) {
      query["ItemCodes"] = request.itemCodes;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResellerAvailableQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResellerAvailableQuotaResponse>(await this.callApi(params, req, runtime), new QueryResellerAvailableQuotaResponse({}));
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - QueryResellerAvailableQuotaRequest
   * @returns QueryResellerAvailableQuotaResponse
   */
  async queryResellerAvailableQuota(request: QueryResellerAvailableQuotaRequest): Promise<QueryResellerAvailableQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResellerAvailableQuotaWithOptions(request, runtime);
  }

  /**
   * 查询用户的信控预警阀值,该接口暂未测试启用
   * 
   * @param request - QueryResellerUserAlarmThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResellerUserAlarmThresholdResponse
   */
  async queryResellerUserAlarmThresholdWithOptions(request: QueryResellerUserAlarmThresholdRequest, runtime: $Util.RuntimeOptions): Promise<QueryResellerUserAlarmThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new QueryResellerUserAlarmThresholdResponse({}));
  }

  /**
   * 查询用户的信控预警阀值,该接口暂未测试启用
   * 
   * @param request - QueryResellerUserAlarmThresholdRequest
   * @returns QueryResellerUserAlarmThresholdResponse
   */
  async queryResellerUserAlarmThreshold(request: QueryResellerUserAlarmThresholdRequest): Promise<QueryResellerUserAlarmThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the instances of a resource plan. You can query the resource plans that are expired within one year.
   * 
   * @param request - QueryResourcePackageInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResourcePackageInstancesResponse
   */
  async queryResourcePackageInstancesWithOptions(request: QueryResourcePackageInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryResourcePackageInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    if (!Util.isUnset(request.includePartner)) {
      query["IncludePartner"] = request.includePartner;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResourcePackageInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResourcePackageInstancesResponse>(await this.callApi(params, req, runtime), new QueryResourcePackageInstancesResponse({}));
  }

  /**
   * Queries the instances of a resource plan. You can query the resource plans that are expired within one year.
   * 
   * @param request - QueryResourcePackageInstancesRequest
   * @returns QueryResourcePackageInstancesResponse
   */
  async queryResourcePackageInstances(request: QueryResourcePackageInstancesRequest): Promise<QueryResourcePackageInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResourcePackageInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the deduction details of savings plans.
   * 
   * @param request - QuerySavingsPlansDeductLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansDeductLogResponse
   */
  async querySavingsPlansDeductLogWithOptions(request: QuerySavingsPlansDeductLogRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansDeductLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansDeductLog",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansDeductLogResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansDeductLogResponse({}));
  }

  /**
   * Queries the deduction details of savings plans.
   * 
   * @param request - QuerySavingsPlansDeductLogRequest
   * @returns QuerySavingsPlansDeductLogResponse
   */
  async querySavingsPlansDeductLog(request: QuerySavingsPlansDeductLogRequest): Promise<QuerySavingsPlansDeductLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansDeductLogWithOptions(request, runtime);
  }

  /**
   * Queries discounts on savings plans.
   * 
   * @param request - QuerySavingsPlansDiscountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansDiscountResponse
   */
  async querySavingsPlansDiscountWithOptions(request: QuerySavingsPlansDiscountRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansDiscountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansDiscount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansDiscountResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansDiscountResponse({}));
  }

  /**
   * Queries discounts on savings plans.
   * 
   * @param request - QuerySavingsPlansDiscountRequest
   * @returns QuerySavingsPlansDiscountResponse
   */
  async querySavingsPlansDiscount(request: QuerySavingsPlansDiscountRequest): Promise<QuerySavingsPlansDiscountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansDiscountWithOptions(request, runtime);
  }

  /**
   * Queries the information about savings plan instances of the current user.
   * 
   * @param request - QuerySavingsPlansInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansInstanceResponse
   */
  async querySavingsPlansInstanceWithOptions(request: QuerySavingsPlansInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansInstanceResponse({}));
  }

  /**
   * Queries the information about savings plan instances of the current user.
   * 
   * @param request - QuerySavingsPlansInstanceRequest
   * @returns QuerySavingsPlansInstanceResponse
   */
  async querySavingsPlansInstance(request: QuerySavingsPlansInstanceRequest): Promise<QuerySavingsPlansInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansInstanceWithOptions(request, runtime);
  }

  /**
   * The code of the service.
   * 
   * @param request - QuerySettleBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySettleBillResponse
   */
  async querySettleBillWithOptions(request: QuerySettleBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySettleBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySettleBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySettleBillResponse>(await this.callApi(params, req, runtime), new QuerySettleBillResponse({}));
  }

  /**
   * The code of the service.
   * 
   * @param request - QuerySettleBillRequest
   * @returns QuerySettleBillResponse
   */
  async querySettleBill(request: QuerySettleBillRequest): Promise<QuerySettleBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySettleBillWithOptions(request, runtime);
  }

  /**
   * Queries the stock keeping units (SKUs) of a service. In most cases, a service has one or more SKUs. A service may even have tens of thousands of SKUs. You can call this operation to query the SKUs of a specific service and the prices of the SKUs. You can configure request parameters to query the specified SKUs based on the configurations of the SKUs.
   * 
   * @param tmpReq - QuerySkuPriceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySkuPriceListResponse
   */
  async querySkuPriceListWithOptions(tmpReq: QuerySkuPriceListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySkuPriceListResponse> {
    Util.validateModel(tmpReq);
    let request = new QuerySkuPriceListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.priceFactorConditionMap)) {
      request.priceFactorConditionMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.priceFactorConditionMap, "PriceFactorConditionMap", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySkuPriceList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySkuPriceListResponse>(await this.callApi(params, req, runtime), new QuerySkuPriceListResponse({}));
  }

  /**
   * Queries the stock keeping units (SKUs) of a service. In most cases, a service has one or more SKUs. A service may even have tens of thousands of SKUs. You can call this operation to query the SKUs of a specific service and the prices of the SKUs. You can configure request parameters to query the specified SKUs based on the configurations of the SKUs.
   * 
   * @param request - QuerySkuPriceListRequest
   * @returns QuerySkuPriceListResponse
   */
  async querySkuPriceList(request: QuerySkuPriceListRequest): Promise<QuerySkuPriceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySkuPriceListWithOptions(request, runtime);
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](https://help.aliyun.com/document_detail/208169.html) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
   * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
   * *   You can call this operation to query split bills generated within the last 12 months.
   * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
   * 
   * @param request - QuerySplitItemBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySplitItemBillResponse
   */
  async querySplitItemBillWithOptions(request: QuerySplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySplitItemBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySplitItemBillResponse>(await this.callApi(params, req, runtime), new QuerySplitItemBillResponse({}));
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](https://help.aliyun.com/document_detail/208169.html) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
   * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
   * *   You can call this operation to query split bills generated within the last 12 months.
   * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
   * 
   * @param request - QuerySplitItemBillRequest
   * @returns QuerySplitItemBillResponse
   */
  async querySplitItemBill(request: QuerySplitItemBillRequest): Promise<QuerySplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySplitItemBillWithOptions(request, runtime);
  }

  /**
   * Queries the usage data of an Alibaba Cloud service.
   * 
   * @remarks
   * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
   * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
   * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
   *     *   You can query the usage data that is recorded in the last quarter.
   * 
   * @param request - QueryUserOmsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserOmsDataResponse
   */
  async queryUserOmsDataWithOptions(request: QueryUserOmsDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserOmsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.table)) {
      query["Table"] = request.table;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserOmsData",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserOmsDataResponse>(await this.callApi(params, req, runtime), new QueryUserOmsDataResponse({}));
  }

  /**
   * Queries the usage data of an Alibaba Cloud service.
   * 
   * @remarks
   * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
   * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
   * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
   *     *   You can query the usage data that is recorded in the last quarter.
   * 
   * @param request - QueryUserOmsDataRequest
   * @returns QueryUserOmsDataResponse
   */
  async queryUserOmsData(request: QueryUserOmsDataRequest): Promise<QueryUserOmsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserOmsDataWithOptions(request, runtime);
  }

  /**
   * Unsubscribes from an instance that is no longer needed.
   * 
   * @remarks
   * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/zh/user-center/user-guide/refund-rules).
   * 
   * @param request - RefundInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundInstanceResponse
   */
  async refundInstanceWithOptions(request: RefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RefundInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.immediatelyRelease)) {
      query["ImmediatelyRelease"] = request.immediatelyRelease;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundInstanceResponse>(await this.callApi(params, req, runtime), new RefundInstanceResponse({}));
  }

  /**
   * Unsubscribes from an instance that is no longer needed.
   * 
   * @remarks
   * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/zh/user-center/user-guide/refund-rules).
   * 
   * @param request - RefundInstanceRequest
   * @returns RefundInstanceResponse
   */
  async refundInstance(request: RefundInstanceRequest): Promise<RefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  /**
   * Releases instances by Virtual Network Operators (VNOs).
   * 
   * @remarks
   * This operation is provided for only VNOs to release instances. If a non-specific VNO calls this operation, the request is blocked.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  /**
   * Releases instances by Virtual Network Operators (VNOs).
   * 
   * @remarks
   * This operation is provided for only VNOs to release instances. If a non-specific VNO calls this operation, the request is blocked.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Terminates a financial relationship between the management account and a member.
   * 
   * @param request - RelieveAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RelieveAccountRelationResponse
   */
  async relieveAccountRelationWithOptions(request: RelieveAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<RelieveAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RelieveAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RelieveAccountRelationResponse>(await this.callApi(params, req, runtime), new RelieveAccountRelationResponse({}));
  }

  /**
   * Terminates a financial relationship between the management account and a member.
   * 
   * @param request - RelieveAccountRelationRequest
   * @returns RelieveAccountRelationResponse
   */
  async relieveAccountRelation(request: RelieveAccountRelationRequest): Promise<RelieveAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.relieveAccountRelationWithOptions(request, runtime);
  }

  /**
   * 续费变配接口
   * 
   * @param request - RenewChangeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewChangeInstanceResponse
   */
  async renewChangeInstanceWithOptions(request: RenewChangeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewChangeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewChangeInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewChangeInstanceResponse>(await this.callApi(params, req, runtime), new RenewChangeInstanceResponse({}));
  }

  /**
   * 续费变配接口
   * 
   * @param request - RenewChangeInstanceRequest
   * @returns RenewChangeInstanceResponse
   */
  async renewChangeInstance(request: RenewChangeInstanceRequest): Promise<RenewChangeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewChangeInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a specified instance. You cannot call this operation to renew Elastic Compute Service (ECS) instances, ApsaraDB RDS instances, or ApsaraDB for Redis instances. To renew these types of instances, call the dedicated operation of the corresponding service.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  /**
   * Renews a specified instance. You cannot call this operation to renew Elastic Compute Service (ECS) instances, ApsaraDB RDS instances, or ApsaraDB for Redis instances. To renew these types of instances, call the dedicated operation of the corresponding service.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a resource plan.
   * 
   * @param request - RenewResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewResourcePackageResponse
   */
  async renewResourcePackageWithOptions(request: RenewResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<RenewResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewResourcePackageResponse>(await this.callApi(params, req, runtime), new RenewResourcePackageResponse({}));
  }

  /**
   * Renews a resource plan.
   * 
   * @param request - RenewResourcePackageRequest
   * @returns RenewResourcePackageResponse
   */
  async renewResourcePackage(request: RenewResourcePackageRequest): Promise<RenewResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewResourcePackageWithOptions(request, runtime);
  }

  /**
   * Sets an expiration date for all Elastic Compute Service (ECS) instances.
   * 
   * @param request - SetAllExpirationDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAllExpirationDayResponse
   */
  async setAllExpirationDayWithOptions(request: SetAllExpirationDayRequest, runtime: $Util.RuntimeOptions): Promise<SetAllExpirationDayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.unifyExpireDay)) {
      query["UnifyExpireDay"] = request.unifyExpireDay;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAllExpirationDay",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAllExpirationDayResponse>(await this.callApi(params, req, runtime), new SetAllExpirationDayResponse({}));
  }

  /**
   * Sets an expiration date for all Elastic Compute Service (ECS) instances.
   * 
   * @param request - SetAllExpirationDayRequest
   * @returns SetAllExpirationDayResponse
   */
  async setAllExpirationDay(request: SetAllExpirationDayRequest): Promise<SetAllExpirationDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAllExpirationDayWithOptions(request, runtime);
  }

  /**
   * Enables auto-renewal for an instance.
   * 
   * @param request - SetRenewalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRenewalResponse
   */
  async setRenewalWithOptions(request: SetRenewalRequest, runtime: $Util.RuntimeOptions): Promise<SetRenewalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewalPeriod)) {
      query["RenewalPeriod"] = request.renewalPeriod;
    }

    if (!Util.isUnset(request.renewalPeriodUnit)) {
      query["RenewalPeriodUnit"] = request.renewalPeriodUnit;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetRenewal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRenewalResponse>(await this.callApi(params, req, runtime), new SetRenewalResponse({}));
  }

  /**
   * Enables auto-renewal for an instance.
   * 
   * @param request - SetRenewalRequest
   * @returns SetRenewalResponse
   */
  async setRenewal(request: SetRenewalRequest): Promise<SetRenewalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRenewalWithOptions(request, runtime);
  }

  /**
   * @param request - SetResellerUserAlarmThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserAlarmThresholdResponse
   */
  async setResellerUserAlarmThresholdWithOptions(request: SetResellerUserAlarmThresholdRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserAlarmThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmThresholds)) {
      query["AlarmThresholds"] = request.alarmThresholds;
    }

    if (!Util.isUnset(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new SetResellerUserAlarmThresholdResponse({}));
  }

  /**
   * @param request - SetResellerUserAlarmThresholdRequest
   * @returns SetResellerUserAlarmThresholdResponse
   */
  async setResellerUserAlarmThreshold(request: SetResellerUserAlarmThresholdRequest): Promise<SetResellerUserAlarmThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  /**
   * Modify the quota ledger and consumption ledger.
   * 
   * @param request - SetResellerUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserQuotaResponse
   */
  async setResellerUserQuotaWithOptions(request: SetResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new SetResellerUserQuotaResponse({}));
  }

  /**
   * Modify the quota ledger and consumption ledger.
   * 
   * @param request - SetResellerUserQuotaRequest
   * @returns SetResellerUserQuotaResponse
   */
  async setResellerUserQuota(request: SetResellerUserQuotaRequest): Promise<SetResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - SetResellerUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserStatusResponse
   */
  async setResellerUserStatusWithOptions(request: SetResellerUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.stopMode)) {
      query["StopMode"] = request.stopMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserStatus",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserStatusResponse>(await this.callApi(params, req, runtime), new SetResellerUserStatusResponse({}));
  }

  /**
   * @param request - SetResellerUserStatusRequest
   * @returns SetResellerUserStatusResponse
   */
  async setResellerUserStatus(request: SetResellerUserStatusRequest): Promise<SetResellerUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserStatusWithOptions(request, runtime);
  }

  /**
   * Subscribes to the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You can subscribe to only one type of bill at a time.
   * *   The bills generated on the previous day are pushed on a daily basis the next day after you subscribe to the bills. The full-data bills for the previous month are pushed on the fourth day of each month. The monthly bills in the PDF format for the previous month are pushed on the fourth day of each month.
   * *   The daily bills may be delayed. The delayed bills are pushed the next day after they are generated. The delayed bills may include the bills that should have been pushed on the previous day. We recommend that you query the full-data bills for the previous month at the beginning of each month.
   * *   The bill subscriber must have the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The SubscribeBillToOSS operation has the same functionality as the Save Expense Details to OSS Bucket feature in User Center.
   * *   To subscribe to the bills stored in an OSS bucket, make sure that the directory name specified for the OSS bucket conforms to the following naming rules:
   * 1.  1.  The directory name can contain only UTF-8 characters and cannot contain emoticons.
   * 2.  2.  Forward slashes (/) are used to separate paths and can be used to create subdirectories with ease. The directory name cannot start with a forward slash (/), a backslash (\\\\), or consecutive forward slashes (/).
   * 3.  3.  The name of a subdirectory cannot be set to two consecutive periods (..).
   * 4.  4.  The directory name must be 1 to 254 characters in length.
   * *   File names:
   *     *   **BillingItemDetailForBillingPeriod** (Detailed bills of billable items)
   *         *   File name format for a daily push: `UID_BillingItemDetail_YYYYMMDD`. Example: `169**_BillingItemDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_BillingItemDetail_YYYYMM`. Example: `169**_BillingItemDetail_201903`.
   *     *   **InstanceDetailForBillingPeriod** (Detailed bills of instances)
   *         *   File name format for a daily push: `UID_InstanceDetail_YYYYMMDD`. Example: `169**_InstanceDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_InstanceDetail_YYYYMM`. Example: `169**_InstanceDetail_201903`.
   *     *   **InstanceDetailMonthly** (Instance-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_InstanceDetailMonthly_YYYYMM`. Example: `169**_InstanceDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **BillingItemDetailMonthly** (Billable item-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_BillingItemDetailMonthly_YYYYMM`. Example: `169**_BillingItemDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **SplitItemDetailDaily** (Split bills summarized by day)
   *         *   File name format for a daily push: `UID_SplitItemDetailDaily_YYYYMM`. Example: `169**_SplitItemDetailDaily_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **MonthBill** (Monthly bill in the PDF format)
   *         *   File name format for a monthly push: `UID_MonthBill_YYYYMM`. Example: `169**_MonthBill_201903`. The bill for the previous month is pushed on the fourth day of each month.
   * *   The bills of the MonthBill type are PDF files, whereas the bills of other types are CSV files. If the number of data rows in a bill exceeds a threshold, the bill is automatically split into multiple CSV files. Then, the multiple CSV files are automatically merged and compressed into a ZIP file that has the same name format as the original file.
   * 
   * @param request - SubscribeBillToOSSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeBillToOSSResponse
   */
  async subscribeBillToOSSWithOptions(request: SubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!Util.isUnset(request.bucketOwnerId)) {
      query["BucketOwnerId"] = request.bucketOwnerId;
    }

    if (!Util.isUnset(request.bucketPath)) {
      query["BucketPath"] = request.bucketPath;
    }

    if (!Util.isUnset(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!Util.isUnset(request.rowLimitPerFile)) {
      query["RowLimitPerFile"] = request.rowLimitPerFile;
    }

    if (!Util.isUnset(request.subscribeBucket)) {
      query["SubscribeBucket"] = request.subscribeBucket;
    }

    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    if (!Util.isUnset(request.usingSsl)) {
      query["UsingSsl"] = request.usingSsl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new SubscribeBillToOSSResponse({}));
  }

  /**
   * Subscribes to the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You can subscribe to only one type of bill at a time.
   * *   The bills generated on the previous day are pushed on a daily basis the next day after you subscribe to the bills. The full-data bills for the previous month are pushed on the fourth day of each month. The monthly bills in the PDF format for the previous month are pushed on the fourth day of each month.
   * *   The daily bills may be delayed. The delayed bills are pushed the next day after they are generated. The delayed bills may include the bills that should have been pushed on the previous day. We recommend that you query the full-data bills for the previous month at the beginning of each month.
   * *   The bill subscriber must have the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The SubscribeBillToOSS operation has the same functionality as the Save Expense Details to OSS Bucket feature in User Center.
   * *   To subscribe to the bills stored in an OSS bucket, make sure that the directory name specified for the OSS bucket conforms to the following naming rules:
   * 1.  1.  The directory name can contain only UTF-8 characters and cannot contain emoticons.
   * 2.  2.  Forward slashes (/) are used to separate paths and can be used to create subdirectories with ease. The directory name cannot start with a forward slash (/), a backslash (\\\\), or consecutive forward slashes (/).
   * 3.  3.  The name of a subdirectory cannot be set to two consecutive periods (..).
   * 4.  4.  The directory name must be 1 to 254 characters in length.
   * *   File names:
   *     *   **BillingItemDetailForBillingPeriod** (Detailed bills of billable items)
   *         *   File name format for a daily push: `UID_BillingItemDetail_YYYYMMDD`. Example: `169**_BillingItemDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_BillingItemDetail_YYYYMM`. Example: `169**_BillingItemDetail_201903`.
   *     *   **InstanceDetailForBillingPeriod** (Detailed bills of instances)
   *         *   File name format for a daily push: `UID_InstanceDetail_YYYYMMDD`. Example: `169**_InstanceDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_InstanceDetail_YYYYMM`. Example: `169**_InstanceDetail_201903`.
   *     *   **InstanceDetailMonthly** (Instance-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_InstanceDetailMonthly_YYYYMM`. Example: `169**_InstanceDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **BillingItemDetailMonthly** (Billable item-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_BillingItemDetailMonthly_YYYYMM`. Example: `169**_BillingItemDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **SplitItemDetailDaily** (Split bills summarized by day)
   *         *   File name format for a daily push: `UID_SplitItemDetailDaily_YYYYMM`. Example: `169**_SplitItemDetailDaily_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **MonthBill** (Monthly bill in the PDF format)
   *         *   File name format for a monthly push: `UID_MonthBill_YYYYMM`. Example: `169**_MonthBill_201903`. The bill for the previous month is pushed on the fourth day of each month.
   * *   The bills of the MonthBill type are PDF files, whereas the bills of other types are CSV files. If the number of data rows in a bill exceeds a threshold, the bill is automatically split into multiple CSV files. Then, the multiple CSV files are automatically merged and compressed into a ZIP file that has the same name format as the original file.
   * 
   * @param request - SubscribeBillToOSSRequest
   * @returns SubscribeBillToOSSResponse
   */
  async subscribeBillToOSS(request: SubscribeBillToOSSRequest): Promise<SubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeBillToOSSWithOptions(request, runtime);
  }

  /**
   * Add tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Add tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unsubscribes from the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - UnsubscribeBillToOSSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnsubscribeBillToOSSResponse
   */
  async unsubscribeBillToOSSWithOptions(request: UnsubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnsubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnsubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new UnsubscribeBillToOSSResponse({}));
  }

  /**
   * Unsubscribes from the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - UnsubscribeBillToOSSRequest
   * @returns UnsubscribeBillToOSSResponse
   */
  async unsubscribeBillToOSS(request: UnsubscribeBillToOSSRequest): Promise<UnsubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeBillToOSSWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades a resource plan.
   * 
   * @param request - UpgradeResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeResourcePackageResponse
   */
  async upgradeResourcePackageWithOptions(request: UpgradeResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeResourcePackageResponse>(await this.callApi(params, req, runtime), new UpgradeResourcePackageResponse({}));
  }

  /**
   * Upgrades a resource plan.
   * 
   * @param request - UpgradeResourcePackageRequest
   * @returns UpgradeResourcePackageResponse
   */
  async upgradeResourcePackage(request: UpgradeResourcePackageRequest): Promise<UpgradeResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeResourcePackageWithOptions(request, runtime);
  }

}
