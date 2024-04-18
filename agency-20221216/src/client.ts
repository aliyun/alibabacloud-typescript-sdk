// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelSubscriptionBillRequest extends $tea.Model {
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSubscriptionBillResponseBody extends $tea.Model {
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

export class CancelSubscriptionBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelSubscriptionBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelSubscriptionBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerRequest extends $tea.Model {
  customerName?: string;
  customerSource?: string;
  customerSubTrade?: string;
  customerTrade?: string;
  nation?: string;
  static names(): { [key: string]: string } {
    return {
      customerName: 'CustomerName',
      customerSource: 'CustomerSource',
      customerSubTrade: 'CustomerSubTrade',
      customerTrade: 'CustomerTrade',
      nation: 'Nation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerName: 'string',
      customerSource: 'string',
      customerSubTrade: 'string',
      customerTrade: 'string',
      nation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerResponseBody extends $tea.Model {
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

export class CreateCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListRequest extends $tea.Model {
  endDate?: string;
  endUserPk?: number;
  language?: string;
  operationType?: string;
  pageNo?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      endUserPk: 'EndUserPk',
      language: 'Language',
      operationType: 'OperationType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      endUserPk: 'number',
      language: 'string',
      operationType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListResponseBody extends $tea.Model {
  code?: string;
  data?: CustomerQuotaRecordListResponseBodyData[];
  msg?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CustomerQuotaRecordListResponseBodyData },
      msg: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CustomerQuotaRecordListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CustomerQuotaRecordListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductOutstandingBalanceRequest extends $tea.Model {
  deductAmount?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductAmount: 'DeductAmount',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductAmount: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductOutstandingBalanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
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

export class DeductOutstandingBalanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeductOutstandingBalanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeductOutstandingBalanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditEndUserStatusRequest extends $tea.Model {
  creditStatus?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      creditStatus: 'CreditStatus',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditStatus: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditEndUserStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditEndUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditEndUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditEndUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditNewBuyStatusRequest extends $tea.Model {
  newBuyStatus?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      newBuyStatus: 'NewBuyStatus',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newBuyStatus: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditNewBuyStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditNewBuyStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditNewBuyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditNewBuyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditZeroCreditShutdownRequest extends $tea.Model {
  shutdownPolicy?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      shutdownPolicy: 'ShutdownPolicy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shutdownPolicy: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditZeroCreditShutdownResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditZeroCreditShutdownResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditZeroCreditShutdownResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditZeroCreditShutdownResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomerQuotaRecordRequest extends $tea.Model {
  endDate?: string;
  endUserPk?: number;
  language?: string;
  operationType?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      endUserPk: 'EndUserPk',
      language: 'Language',
      operationType: 'OperationType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      endUserPk: 'number',
      language: 'string',
      operationType: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomerQuotaRecordResponseBody extends $tea.Model {
  code?: string;
  data?: ExportCustomerQuotaRecordResponseBodyData;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportCustomerQuotaRecordResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomerQuotaRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportCustomerQuotaRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportCustomerQuotaRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  uid?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      uid: 'Uid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      uid: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $tea.Model {
  accountInfoList?: GetAccountInfoResponseBodyAccountInfoList;
  code?: string;
  message?: string;
  pageInfo?: GetAccountInfoResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfoList: 'AccountInfoList',
      code: 'Code',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoList: GetAccountInfoResponseBodyAccountInfoList,
      code: 'string',
      message: 'string',
      pageInfo: GetAccountInfoResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoRequest extends $tea.Model {
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetCreditInfoResponseBodyData;
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
      data: GetCreditInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCreditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCreditInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillRequest extends $tea.Model {
  billOwner?: string;
  billType?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      billOwner: 'BillOwner',
      billType: 'BillType',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwner: 'string',
      billType: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillResponseBody extends $tea.Model {
  code?: string;
  data?: GetDailyBillResponseBodyData;
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
      data: GetDailyBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDailyBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDailyBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusRequest extends $tea.Model {
  inviteStatusList?: GetInviteStatusRequestInviteStatusList[];
  static names(): { [key: string]: string } {
    return {
      inviteStatusList: 'InviteStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteStatusList: { 'type': 'array', 'itemType': GetInviteStatusRequestInviteStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetInviteStatusResponseBodyData;
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
      data: GetInviteStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInviteStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInviteStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthlyBillRequest extends $tea.Model {
  billOwner?: string;
  billType?: string;
  month?: string;
  static names(): { [key: string]: string } {
    return {
      billOwner: 'BillOwner',
      billType: 'BillType',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwner: 'string',
      billType: 'string',
      month: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthlyBillResponseBody extends $tea.Model {
  code?: string;
  data?: GetMonthlyBillResponseBodyData;
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
      data: GetMonthlyBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthlyBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMonthlyBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMonthlyBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBody extends $tea.Model {
  code?: string;
  inviteInfoList?: GetUnassociatedCustomerResponseBodyInviteInfoList;
  message?: string;
  pageInfo?: GetUnassociatedCustomerResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      inviteInfoList: 'InviteInfoList',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      inviteInfoList: GetUnassociatedCustomerResponseBodyInviteInfoList,
      message: 'string',
      pageInfo: GetUnassociatedCustomerResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUnassociatedCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUnassociatedCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountRequest extends $tea.Model {
  accountInfoList?: InviteSubAccountRequestAccountInfoList[];
  static names(): { [key: string]: string } {
    return {
      accountInfoList: 'AccountInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoList: { 'type': 'array', 'itemType': InviteSubAccountRequestAccountInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  results?: InviteSubAccountResponseBodyResults;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      results: InviteSubAccountResponseBodyResults,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InviteSubAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InviteSubAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCountriesResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCountriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCountriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCountriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageRequest extends $tea.Model {
  account?: string;
  couponTemplateId?: number;
  page?: number;
  pageSize?: number;
  status?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      couponTemplateId: 'CouponTemplateId',
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      couponTemplateId: 'number',
      page: 'number',
      pageSize: 'number',
      status: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBody extends $tea.Model {
  code?: string;
  data?: ListCouponUsageResponseBodyData[];
  message?: string;
  pageInfo?: ListCouponUsageResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCouponUsageResponseBodyData },
      message: 'string',
      pageInfo: ListCouponUsageResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCouponUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCouponUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaListExportPagedRequest extends $tea.Model {
  currentPage?: number;
  language?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      language: 'Language',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      language: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaListExportPagedResponseBody extends $tea.Model {
  code?: string;
  data?: QuotaListExportPagedResponseBodyData[];
  msg?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QuotaListExportPagedResponseBodyData },
      msg: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaListExportPagedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuotaListExportPagedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuotaListExportPagedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailRequest extends $tea.Model {
  inviteId?: number;
  static names(): { [key: string]: string } {
    return {
      inviteId: 'InviteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
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

export class ResendEmailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResendEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResendEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccountInfoRequest extends $tea.Model {
  accountNickname?: string;
  customerBd?: string;
  remark?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      customerBd: 'CustomerBd',
      remark: 'Remark',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      customerBd: 'string',
      remark: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccountInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
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

export class SetAccountInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLineRequest extends $tea.Model {
  creditLine?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      creditLine: 'CreditLine',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditLine: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLineResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
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

export class SetCreditLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetCreditLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCreditLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWarningThresholdRequest extends $tea.Model {
  uid?: number;
  warningValue?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      warningValue: 'WarningValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
      warningValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWarningThresholdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
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

export class SetWarningThresholdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetWarningThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetWarningThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionBillRequest extends $tea.Model {
  beginBillingCycle?: string;
  billFormat?: string;
  bucketOwnerId?: number;
  subscribeBucket?: string;
  subscribeSegmentSize?: number;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      billFormat: 'BillFormat',
      bucketOwnerId: 'BucketOwnerId',
      subscribeBucket: 'SubscribeBucket',
      subscribeSegmentSize: 'SubscribeSegmentSize',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      billFormat: 'string',
      bucketOwnerId: 'number',
      subscribeBucket: 'string',
      subscribeSegmentSize: 'number',
      subscribeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionBillResponseBody extends $tea.Model {
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

export class SubscriptionBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubscriptionBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubscriptionBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListResponseBodyData extends $tea.Model {
  operationSubmitType?: string;
  operationTime?: string;
  operationTypeCode?: string;
  operationTypeDesc?: string;
  operationUid?: string;
  updateAfterAmount?: string;
  updateAmount?: string;
  updateBeforeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      operationSubmitType: 'OperationSubmitType',
      operationTime: 'OperationTime',
      operationTypeCode: 'OperationTypeCode',
      operationTypeDesc: 'OperationTypeDesc',
      operationUid: 'OperationUid',
      updateAfterAmount: 'UpdateAfterAmount',
      updateAmount: 'UpdateAmount',
      updateBeforeAmount: 'UpdateBeforeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationSubmitType: 'string',
      operationTime: 'string',
      operationTypeCode: 'string',
      operationTypeDesc: 'string',
      operationUid: 'string',
      updateAfterAmount: 'string',
      updateAmount: 'string',
      updateBeforeAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCustomerQuotaRecordResponseBodyData extends $tea.Model {
  cost?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyAccountInfoListAccountInfo extends $tea.Model {
  accountNickname?: string;
  aliyunId?: string;
  associationSuccessTime?: string;
  cid?: number;
  customerBd?: string;
  delayAmount?: string;
  delayStatus?: string;
  email?: string;
  mobile?: string;
  newBuyStatus?: string;
  remark?: string;
  subAccountType?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      aliyunId: 'AliyunId',
      associationSuccessTime: 'AssociationSuccessTime',
      cid: 'Cid',
      customerBd: 'CustomerBd',
      delayAmount: 'DelayAmount',
      delayStatus: 'DelayStatus',
      email: 'Email',
      mobile: 'Mobile',
      newBuyStatus: 'NewBuyStatus',
      remark: 'Remark',
      subAccountType: 'SubAccountType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      aliyunId: 'string',
      associationSuccessTime: 'string',
      cid: 'number',
      customerBd: 'string',
      delayAmount: 'string',
      delayStatus: 'string',
      email: 'string',
      mobile: 'string',
      newBuyStatus: 'string',
      remark: 'string',
      subAccountType: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyAccountInfoList extends $tea.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfoListAccountInfo[];
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: { 'type': 'array', 'itemType': GetAccountInfoResponseBodyAccountInfoListAccountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoResponseBodyData extends $tea.Model {
  accountStatus?: string;
  alarmThreshold?: string;
  availableCredit?: string;
  consumedUndeductedValue?: string;
  creditLine?: string;
  outstandingBalance?: string;
  zeroCreditShutdownPolicy?: string;
  newBuyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      alarmThreshold: 'AlarmThreshold',
      availableCredit: 'AvailableCredit',
      consumedUndeductedValue: 'ConsumedUndeductedValue',
      creditLine: 'CreditLine',
      outstandingBalance: 'OutstandingBalance',
      zeroCreditShutdownPolicy: 'ZeroCreditShutdownPolicy',
      newBuyStatus: 'newBuyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      alarmThreshold: 'string',
      availableCredit: 'string',
      consumedUndeductedValue: 'string',
      creditLine: 'string',
      outstandingBalance: 'string',
      zeroCreditShutdownPolicy: 'string',
      newBuyStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillResponseBodyData extends $tea.Model {
  billLinkCSV?: string;
  billLinkXLSX?: string;
  billOwner?: string;
  billType?: string;
  spendingTime?: string;
  static names(): { [key: string]: string } {
    return {
      billLinkCSV: 'BillLinkCSV',
      billLinkXLSX: 'BillLinkXLSX',
      billOwner: 'BillOwner',
      billType: 'BillType',
      spendingTime: 'SpendingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billLinkCSV: 'string',
      billLinkXLSX: 'string',
      billOwner: 'string',
      billType: 'string',
      spendingTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusRequestInviteStatusList extends $tea.Model {
  inviteId?: number;
  static names(): { [key: string]: string } {
    return {
      inviteId: 'InviteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBodyDataInviteStatusInviteStatusList extends $tea.Model {
  associationSuccessTime?: string;
  cid?: number;
  gmtCreate?: string;
  parentId?: string;
  status?: number;
  subAccountType?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      associationSuccessTime: 'AssociationSuccessTime',
      cid: 'Cid',
      gmtCreate: 'GmtCreate',
      parentId: 'ParentId',
      status: 'Status',
      subAccountType: 'SubAccountType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationSuccessTime: 'string',
      cid: 'number',
      gmtCreate: 'string',
      parentId: 'string',
      status: 'number',
      subAccountType: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBodyDataInviteStatus extends $tea.Model {
  code?: string;
  inviteStatusList?: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      inviteStatusList: 'InviteStatusList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      inviteStatusList: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInviteStatusResponseBodyData extends $tea.Model {
  inviteStatus?: GetInviteStatusResponseBodyDataInviteStatus[];
  static names(): { [key: string]: string } {
    return {
      inviteStatus: 'InviteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteStatus: { 'type': 'array', 'itemType': GetInviteStatusResponseBodyDataInviteStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthlyBillResponseBodyData extends $tea.Model {
  billLinkCSV?: string;
  billLinkXLSX?: string;
  billOwner?: string;
  billType?: string;
  invoiceLink?: string;
  refundInvoiceFlag?: boolean;
  refundInvoiceLink?: string;
  spendingTime?: string;
  static names(): { [key: string]: string } {
    return {
      billLinkCSV: 'BillLinkCSV',
      billLinkXLSX: 'BillLinkXLSX',
      billOwner: 'BillOwner',
      billType: 'BillType',
      invoiceLink: 'InvoiceLink',
      refundInvoiceFlag: 'RefundInvoiceFlag',
      refundInvoiceLink: 'RefundInvoiceLink',
      spendingTime: 'SpendingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billLinkCSV: 'string',
      billLinkXLSX: 'string',
      billOwner: 'string',
      billType: 'string',
      invoiceLink: 'string',
      refundInvoiceFlag: 'boolean',
      refundInvoiceLink: 'string',
      spendingTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo extends $tea.Model {
  accountNickname?: string;
  email?: string;
  gmtCreate?: string;
  inviteId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      email: 'Email',
      gmtCreate: 'GmtCreate',
      inviteId: 'InviteId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      email: 'string',
      gmtCreate: 'string',
      inviteId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBodyInviteInfoList extends $tea.Model {
  inviteInfo?: GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo[];
  static names(): { [key: string]: string } {
    return {
      inviteInfo: 'InviteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inviteInfo: { 'type': 'array', 'itemType': GetUnassociatedCustomerResponseBodyInviteInfoListInviteInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnassociatedCustomerResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountRequestAccountInfoList extends $tea.Model {
  accountNickname?: string;
  creditLine?: string;
  customerBd?: string;
  customerId?: string;
  emailAddress?: string;
  newBuyStatus?: string;
  remark?: string;
  subAccountType?: string;
  zeroCreditShutdownPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      creditLine: 'CreditLine',
      customerBd: 'CustomerBd',
      customerId: 'CustomerId',
      emailAddress: 'EmailAddress',
      newBuyStatus: 'NewBuyStatus',
      remark: 'Remark',
      subAccountType: 'SubAccountType',
      zeroCreditShutdownPolicy: 'ZeroCreditShutdownPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      creditLine: 'string',
      customerBd: 'string',
      customerId: 'string',
      emailAddress: 'string',
      newBuyStatus: 'string',
      remark: 'string',
      subAccountType: 'string',
      zeroCreditShutdownPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponseBodyResultsResultResult extends $tea.Model {
  days?: number;
  inviteId?: number;
  regUrl?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      inviteId: 'InviteId',
      regUrl: 'RegUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      inviteId: 'number',
      regUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponseBodyResultsResult extends $tea.Model {
  code?: string;
  message?: string;
  result?: InviteSubAccountResponseBodyResultsResultResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: InviteSubAccountResponseBodyResultsResultResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponseBodyResults extends $tea.Model {
  result?: InviteSubAccountResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': InviteSubAccountResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBodyData extends $tea.Model {
  account?: string;
  amount?: number;
  balance?: number;
  couponId?: string;
  couponTemplateId?: number;
  effDate?: string;
  publishDate?: string;
  status?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      amount: 'Amount',
      balance: 'Balance',
      couponId: 'CouponId',
      couponTemplateId: 'CouponTemplateId',
      effDate: 'EffDate',
      publishDate: 'PublishDate',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      amount: 'number',
      balance: 'number',
      couponId: 'string',
      couponTemplateId: 'number',
      effDate: 'string',
      publishDate: 'string',
      status: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBodyPageInfo extends $tea.Model {
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaListExportPagedResponseBodyData extends $tea.Model {
  createTime?: string;
  fileName?: string;
  message?: string;
  status?: string;
  statusCode?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      message: 'Message',
      status: 'Status',
      statusCode: 'StatusCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      message: 'string',
      status: 'string',
      statusCode: 'string',
      url: 'string',
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
      'ap-northeast-1': "agency.aliyuncs.com",
      'ap-northeast-2-pop': "agency.aliyuncs.com",
      'ap-south-1': "agency.aliyuncs.com",
      'ap-southeast-2': "agency.aliyuncs.com",
      'ap-southeast-3': "agency.aliyuncs.com",
      'ap-southeast-5': "agency.aliyuncs.com",
      'cn-beijing': "agency.aliyuncs.com",
      'cn-beijing-finance-1': "agency.aliyuncs.com",
      'cn-beijing-finance-pop': "agency.aliyuncs.com",
      'cn-beijing-gov-1': "agency.aliyuncs.com",
      'cn-beijing-nu16-b01': "agency.aliyuncs.com",
      'cn-chengdu': "agency.aliyuncs.com",
      'cn-edge-1': "agency.aliyuncs.com",
      'cn-fujian': "agency.aliyuncs.com",
      'cn-haidian-cm12-c01': "agency.aliyuncs.com",
      'cn-hangzhou': "agency.aliyuncs.com",
      'cn-hangzhou-bj-b01': "agency.aliyuncs.com",
      'cn-hangzhou-finance': "agency.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "agency.aliyuncs.com",
      'cn-hangzhou-test-306': "agency.aliyuncs.com",
      'cn-hongkong': "agency.aliyuncs.com",
      'cn-hongkong-finance-pop': "agency.aliyuncs.com",
      'cn-huhehaote': "agency.aliyuncs.com",
      'cn-huhehaote-nebula-1': "agency.aliyuncs.com",
      'cn-north-2-gov-1': "agency.aliyuncs.com",
      'cn-qingdao': "agency.aliyuncs.com",
      'cn-qingdao-nebula': "agency.aliyuncs.com",
      'cn-shanghai': "agency.aliyuncs.com",
      'cn-shanghai-et15-b01': "agency.aliyuncs.com",
      'cn-shanghai-et2-b01': "agency.aliyuncs.com",
      'cn-shanghai-finance-1': "agency.aliyuncs.com",
      'cn-shanghai-inner': "agency.aliyuncs.com",
      'cn-shanghai-internal-test-1': "agency.aliyuncs.com",
      'cn-shenzhen': "agency.aliyuncs.com",
      'cn-shenzhen-finance-1': "agency.aliyuncs.com",
      'cn-shenzhen-inner': "agency.aliyuncs.com",
      'cn-shenzhen-st4-d01': "agency.aliyuncs.com",
      'cn-shenzhen-su18-b01': "agency.aliyuncs.com",
      'cn-wuhan': "agency.aliyuncs.com",
      'cn-wulanchabu': "agency.aliyuncs.com",
      'cn-yushanfang': "agency.aliyuncs.com",
      'cn-zhangbei': "agency.aliyuncs.com",
      'cn-zhangbei-na61-b01': "agency.aliyuncs.com",
      'cn-zhangjiakou': "agency.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "agency.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "agency.aliyuncs.com",
      'eu-central-1': "agency.aliyuncs.com",
      'eu-west-1': "agency.aliyuncs.com",
      'eu-west-1-oxs': "agency.aliyuncs.com",
      'me-east-1': "agency.aliyuncs.com",
      'rus-west-1-pop': "agency.aliyuncs.com",
      'us-east-1': "agency.aliyuncs.com",
      'us-west-1': "agency.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agency", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
    * You can call this operation to cancel the subscription to only one type of bill at a time.
    * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
    * **This topic is published only on the international site (alibabacloud.com).
    *
    * @param request CancelSubscriptionBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBillWithOptions(request: CancelSubscriptionBillRequest, runtime: $Util.RuntimeOptions): Promise<CancelSubscriptionBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelSubscriptionBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelSubscriptionBillResponse>(await this.callApi(params, req, runtime), new CancelSubscriptionBillResponse({}));
  }

  /**
    * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
    * You can call this operation to cancel the subscription to only one type of bill at a time.
    * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
    * **This topic is published only on the international site (alibabacloud.com).
    *
    * @param request CancelSubscriptionBillRequest
    * @return CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBill(request: CancelSubscriptionBillRequest): Promise<CancelSubscriptionBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSubscriptionBillWithOptions(request, runtime);
  }

  async createCustomerWithOptions(request: CreateCustomerRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customerName)) {
      query["CustomerName"] = request.customerName;
    }

    if (!Util.isUnset(request.customerSource)) {
      query["CustomerSource"] = request.customerSource;
    }

    if (!Util.isUnset(request.customerSubTrade)) {
      query["CustomerSubTrade"] = request.customerSubTrade;
    }

    if (!Util.isUnset(request.customerTrade)) {
      query["CustomerTrade"] = request.customerTrade;
    }

    if (!Util.isUnset(request.nation)) {
      query["Nation"] = request.nation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomerResponse>(await this.callApi(params, req, runtime), new CreateCustomerResponse({}));
  }

  async createCustomer(request: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomerWithOptions(request, runtime);
  }

  async customerQuotaRecordListWithOptions(request: CustomerQuotaRecordListRequest, runtime: $Util.RuntimeOptions): Promise<CustomerQuotaRecordListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CustomerQuotaRecordList",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomerQuotaRecordListResponse>(await this.callApi(params, req, runtime), new CustomerQuotaRecordListResponse({}));
  }

  async customerQuotaRecordList(request: CustomerQuotaRecordListRequest): Promise<CustomerQuotaRecordListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customerQuotaRecordListWithOptions(request, runtime);
  }

  /**
    * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
    * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
    *
    * @param request DeductOutstandingBalanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalanceWithOptions(request: DeductOutstandingBalanceRequest, runtime: $Util.RuntimeOptions): Promise<DeductOutstandingBalanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deductAmount)) {
      query["DeductAmount"] = request.deductAmount;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeductOutstandingBalance",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeductOutstandingBalanceResponse>(await this.callApi(params, req, runtime), new DeductOutstandingBalanceResponse({}));
  }

  /**
    * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
    * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
    *
    * @param request DeductOutstandingBalanceRequest
    * @return DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalance(request: DeductOutstandingBalanceRequest): Promise<DeductOutstandingBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deductOutstandingBalanceWithOptions(request, runtime);
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditEndUserStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EditEndUserStatusResponse
   */
  async editEndUserStatusWithOptions(request: EditEndUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<EditEndUserStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditEndUserStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditEndUserStatusResponse>(await this.callApi(params, req, runtime), new EditEndUserStatusResponse({}));
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditEndUserStatusRequest
    * @return EditEndUserStatusResponse
   */
  async editEndUserStatus(request: EditEndUserStatusRequest): Promise<EditEndUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editEndUserStatusWithOptions(request, runtime);
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditNewBuyStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EditNewBuyStatusResponse
   */
  async editNewBuyStatusWithOptions(request: EditNewBuyStatusRequest, runtime: $Util.RuntimeOptions): Promise<EditNewBuyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newBuyStatus)) {
      query["NewBuyStatus"] = request.newBuyStatus;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditNewBuyStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditNewBuyStatusResponse>(await this.callApi(params, req, runtime), new EditNewBuyStatusResponse({}));
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditNewBuyStatusRequest
    * @return EditNewBuyStatusResponse
   */
  async editNewBuyStatus(request: EditNewBuyStatusRequest): Promise<EditNewBuyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editNewBuyStatusWithOptions(request, runtime);
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditZeroCreditShutdownRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdownWithOptions(request: EditZeroCreditShutdownRequest, runtime: $Util.RuntimeOptions): Promise<EditZeroCreditShutdownResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.shutdownPolicy)) {
      query["ShutdownPolicy"] = request.shutdownPolicy;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditZeroCreditShutdown",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditZeroCreditShutdownResponse>(await this.callApi(params, req, runtime), new EditZeroCreditShutdownResponse({}));
  }

  /**
    * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
    * **This content is only published on the international site. **
    *
    * @param request EditZeroCreditShutdownRequest
    * @return EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdown(request: EditZeroCreditShutdownRequest): Promise<EditZeroCreditShutdownResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editZeroCreditShutdownWithOptions(request, runtime);
  }

  /**
    * Caller must be a Partner from International Site, either Distribution or Reseller will do.
    *
    * @param request ExportCustomerQuotaRecordRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecordWithOptions(request: ExportCustomerQuotaRecordRequest, runtime: $Util.RuntimeOptions): Promise<ExportCustomerQuotaRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.endUserPk)) {
      query["EndUserPk"] = request.endUserPk;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportCustomerQuotaRecord",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportCustomerQuotaRecordResponse>(await this.callApi(params, req, runtime), new ExportCustomerQuotaRecordResponse({}));
  }

  /**
    * Caller must be a Partner from International Site, either Distribution or Reseller will do.
    *
    * @param request ExportCustomerQuotaRecordRequest
    * @return ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecord(request: ExportCustomerQuotaRecordRequest): Promise<ExportCustomerQuotaRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportCustomerQuotaRecordWithOptions(request, runtime);
  }

  async getAccountInfoWithOptions(request: GetAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountInfoResponse>(await this.callApi(params, req, runtime), new GetAccountInfoResponse({}));
  }

  async getAccountInfo(request: GetAccountInfoRequest): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(request, runtime);
  }

  async getCreditInfoWithOptions(request: GetCreditInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCreditInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCreditInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCreditInfoResponse>(await this.callApi(params, req, runtime), new GetCreditInfoResponse({}));
  }

  async getCreditInfo(request: GetCreditInfoRequest): Promise<GetCreditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCreditInfoWithOptions(request, runtime);
  }

  async getDailyBillWithOptions(request: GetDailyBillRequest, runtime: $Util.RuntimeOptions): Promise<GetDailyBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwner)) {
      query["BillOwner"] = request.billOwner;
    }

    if (!Util.isUnset(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!Util.isUnset(request.date)) {
      query["Date"] = request.date;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDailyBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDailyBillResponse>(await this.callApi(params, req, runtime), new GetDailyBillResponse({}));
  }

  async getDailyBill(request: GetDailyBillRequest): Promise<GetDailyBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDailyBillWithOptions(request, runtime);
  }

  async getInviteStatusWithOptions(request: GetInviteStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetInviteStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inviteStatusList)) {
      query["InviteStatusList"] = request.inviteStatusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInviteStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInviteStatusResponse>(await this.callApi(params, req, runtime), new GetInviteStatusResponse({}));
  }

  async getInviteStatus(request: GetInviteStatusRequest): Promise<GetInviteStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInviteStatusWithOptions(request, runtime);
  }

  async getMonthlyBillWithOptions(request: GetMonthlyBillRequest, runtime: $Util.RuntimeOptions): Promise<GetMonthlyBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwner)) {
      query["BillOwner"] = request.billOwner;
    }

    if (!Util.isUnset(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!Util.isUnset(request.month)) {
      query["Month"] = request.month;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMonthlyBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMonthlyBillResponse>(await this.callApi(params, req, runtime), new GetMonthlyBillResponse({}));
  }

  async getMonthlyBill(request: GetMonthlyBillRequest): Promise<GetMonthlyBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonthlyBillWithOptions(request, runtime);
  }

  async getUnassociatedCustomerWithOptions(request: GetUnassociatedCustomerRequest, runtime: $Util.RuntimeOptions): Promise<GetUnassociatedCustomerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUnassociatedCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUnassociatedCustomerResponse>(await this.callApi(params, req, runtime), new GetUnassociatedCustomerResponse({}));
  }

  async getUnassociatedCustomer(request: GetUnassociatedCustomerRequest): Promise<GetUnassociatedCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUnassociatedCustomerWithOptions(request, runtime);
  }

  /**
    * The current API request rate for the Cloud Product has not been disclosed.
    *
    * @param request InviteSubAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InviteSubAccountResponse
   */
  async inviteSubAccountWithOptions(request: InviteSubAccountRequest, runtime: $Util.RuntimeOptions): Promise<InviteSubAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountInfoList)) {
      query["AccountInfoList"] = request.accountInfoList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InviteSubAccount",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InviteSubAccountResponse>(await this.callApi(params, req, runtime), new InviteSubAccountResponse({}));
  }

  /**
    * The current API request rate for the Cloud Product has not been disclosed.
    *
    * @param request InviteSubAccountRequest
    * @return InviteSubAccountResponse
   */
  async inviteSubAccount(request: InviteSubAccountRequest): Promise<InviteSubAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteSubAccountWithOptions(request, runtime);
  }

  /**
    * The current API request rate for cloud products has not been disclosed.
    *
    * @param request ListCountriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCountriesResponse
   */
  async listCountriesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListCountriesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListCountries",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCountriesResponse>(await this.callApi(params, req, runtime), new ListCountriesResponse({}));
  }

  /**
    * The current API request rate for cloud products has not been disclosed.
    *
    * @return ListCountriesResponse
   */
  async listCountries(): Promise<ListCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCountriesWithOptions(runtime);
  }

  async listCouponUsageWithOptions(request: ListCouponUsageRequest, runtime: $Util.RuntimeOptions): Promise<ListCouponUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.couponTemplateId)) {
      query["CouponTemplateId"] = request.couponTemplateId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCouponUsage",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCouponUsageResponse>(await this.callApi(params, req, runtime), new ListCouponUsageResponse({}));
  }

  async listCouponUsage(request: ListCouponUsageRequest): Promise<ListCouponUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCouponUsageWithOptions(request, runtime);
  }

  /**
    * Caller must be a Partner from International Site, either Distribution or Reseller will do.
    *
    * @param request QuotaListExportPagedRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QuotaListExportPagedResponse
   */
  async quotaListExportPagedWithOptions(request: QuotaListExportPagedRequest, runtime: $Util.RuntimeOptions): Promise<QuotaListExportPagedResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuotaListExportPaged",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuotaListExportPagedResponse>(await this.callApi(params, req, runtime), new QuotaListExportPagedResponse({}));
  }

  /**
    * Caller must be a Partner from International Site, either Distribution or Reseller will do.
    *
    * @param request QuotaListExportPagedRequest
    * @return QuotaListExportPagedResponse
   */
  async quotaListExportPaged(request: QuotaListExportPagedRequest): Promise<QuotaListExportPagedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.quotaListExportPagedWithOptions(request, runtime);
  }

  async resendEmailWithOptions(request: ResendEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inviteId)) {
      query["InviteId"] = request.inviteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResendEmail",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResendEmailResponse>(await this.callApi(params, req, runtime), new ResendEmailResponse({}));
  }

  async resendEmail(request: ResendEmailRequest): Promise<ResendEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailWithOptions(request, runtime);
  }

  async setAccountInfoWithOptions(request: SetAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetAccountInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNickname)) {
      query["AccountNickname"] = request.accountNickname;
    }

    if (!Util.isUnset(request.customerBd)) {
      query["CustomerBd"] = request.customerBd;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccountInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccountInfoResponse>(await this.callApi(params, req, runtime), new SetAccountInfoResponse({}));
  }

  async setAccountInfo(request: SetAccountInfoRequest): Promise<SetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccountInfoWithOptions(request, runtime);
  }

  async setCreditLineWithOptions(request: SetCreditLineRequest, runtime: $Util.RuntimeOptions): Promise<SetCreditLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.creditLine)) {
      query["CreditLine"] = request.creditLine;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCreditLine",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCreditLineResponse>(await this.callApi(params, req, runtime), new SetCreditLineResponse({}));
  }

  async setCreditLine(request: SetCreditLineRequest): Promise<SetCreditLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCreditLineWithOptions(request, runtime);
  }

  async setWarningThresholdWithOptions(request: SetWarningThresholdRequest, runtime: $Util.RuntimeOptions): Promise<SetWarningThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.warningValue)) {
      query["WarningValue"] = request.warningValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetWarningThreshold",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetWarningThresholdResponse>(await this.callApi(params, req, runtime), new SetWarningThresholdResponse({}));
  }

  async setWarningThreshold(request: SetWarningThresholdRequest): Promise<SetWarningThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWarningThresholdWithOptions(request, runtime);
  }

  /**
    * *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
    * *   You can call this operation to subscribe to only one type of bill at a time.
    * *   After the subscription to a type of bill is generated, the bill for the previous day is pushed on a daily basis from the next day. On the fifth day of each month, the full-data bill for the previous month is pushed.
    * *   A daily bill may be delayed. The delayed bill is pushed the next day after it is generated. The delayed bill may contain the bill data that is delayed until the previous day. We recommend that you query the full-data bill for the previous month at the beginning of each month.
    * *   Your account must be granted the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
    * *   The following file name formats are supported for bills:
    * ```
    * BillingItemDetailForBillingPeriod
    *   
    * File name format of a daily bill: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01. 
    *   
    * File name format of a monthly full-data bill: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01. 
    * InstanceDetailForBillingPeriod
    *  
    *  File name format of a daily bill: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01. 
    *   
    * File name format of a monthly full-data bill: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01. 
    * BillingItemDetailMonthly
    *   
    * File name format of a daily bill: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
    * InstanceDetailMonthly
    *   
    * File name format of a daily bill: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
    * The fileNo field exists only when the number of bill rows reaches the maximum rows in a single bill file and the bill is split into multiple files.
    * ```
    * **This topic is published only on the international site (alibabacloud.com).
    *
    * @param request SubscriptionBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SubscriptionBillResponse
   */
  async subscriptionBillWithOptions(request: SubscriptionBillRequest, runtime: $Util.RuntimeOptions): Promise<SubscriptionBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!Util.isUnset(request.billFormat)) {
      query["BillFormat"] = request.billFormat;
    }

    if (!Util.isUnset(request.bucketOwnerId)) {
      query["BucketOwnerId"] = request.bucketOwnerId;
    }

    if (!Util.isUnset(request.subscribeBucket)) {
      query["SubscribeBucket"] = request.subscribeBucket;
    }

    if (!Util.isUnset(request.subscribeSegmentSize)) {
      query["SubscribeSegmentSize"] = request.subscribeSegmentSize;
    }

    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubscriptionBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubscriptionBillResponse>(await this.callApi(params, req, runtime), new SubscriptionBillResponse({}));
  }

  /**
    * *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
    * *   You can call this operation to subscribe to only one type of bill at a time.
    * *   After the subscription to a type of bill is generated, the bill for the previous day is pushed on a daily basis from the next day. On the fifth day of each month, the full-data bill for the previous month is pushed.
    * *   A daily bill may be delayed. The delayed bill is pushed the next day after it is generated. The delayed bill may contain the bill data that is delayed until the previous day. We recommend that you query the full-data bill for the previous month at the beginning of each month.
    * *   Your account must be granted the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
    * *   The following file name formats are supported for bills:
    * ```
    * BillingItemDetailForBillingPeriod
    *   
    * File name format of a daily bill: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01. 
    *   
    * File name format of a monthly full-data bill: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01. 
    * InstanceDetailForBillingPeriod
    *  
    *  File name format of a daily bill: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01. 
    *   
    * File name format of a monthly full-data bill: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01. 
    * BillingItemDetailMonthly
    *   
    * File name format of a daily bill: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
    * InstanceDetailMonthly
    *   
    * File name format of a daily bill: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
    * The fileNo field exists only when the number of bill rows reaches the maximum rows in a single bill file and the bill is split into multiple files.
    * ```
    * **This topic is published only on the international site (alibabacloud.com).
    *
    * @param request SubscriptionBillRequest
    * @return SubscriptionBillResponse
   */
  async subscriptionBill(request: SubscriptionBillRequest): Promise<SubscriptionBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscriptionBillWithOptions(request, runtime);
  }

}
