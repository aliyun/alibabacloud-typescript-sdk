// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelSubscriptionBillRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the bill to which you want to cancel the subscription. Valid values: PartnerBillingItemDetailForBillingPeriod, PartnerBillingItemDetailMonthly, PartnerInstanceDetailForBillingPeriod, and PartnerInstanceDetailMonthly.
   * 
   * This parameter is required.
   * 
   * @example
   * PartnerBillingItemDetailForBillingPeriod
   */
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
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message that is returned.
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
   * 210e876f16704666020714468dab35
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

export class CreateCouponTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All Products
   */
  applicableProducts?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Partner
   */
  costBearer?: string;
  couponDescription?: string;
  /**
   * @example
   * 2024-08-26
   */
  expireddate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Unlimited
   */
  limitPerPerson?: string;
  productType?: string[];
  /**
   * @example
   * ALL
   */
  purchaseType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reasonForApplication?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  /**
   * @example
   * 2024-08-26
   */
  vailddate?: string;
  /**
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponDescription: 'CouponDescription',
      expireddate: 'Expireddate',
      limitPerPerson: 'LimitPerPerson',
      productType: 'ProductType',
      purchaseType: 'PurchaseType',
      reasonForApplication: 'ReasonForApplication',
      templateName: 'TemplateName',
      vailddate: 'Vailddate',
      vaildperioddays: 'Vaildperioddays',
      validUntil: 'ValidUntil',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      applicableProducts: 'string',
      costBearer: 'string',
      couponDescription: 'string',
      expireddate: 'string',
      limitPerPerson: 'string',
      productType: { 'type': 'array', 'itemType': 'string' },
      purchaseType: 'string',
      reasonForApplication: 'string',
      templateName: 'string',
      vailddate: 'string',
      vaildperioddays: 'string',
      validUntil: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCouponTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All Products
   */
  applicableProducts?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Partner
   */
  costBearer?: string;
  couponDescription?: string;
  /**
   * @example
   * 2024-08-26
   */
  expireddate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Unlimited
   */
  limitPerPerson?: string;
  productTypeShrink?: string;
  /**
   * @example
   * ALL
   */
  purchaseType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reasonForApplication?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  /**
   * @example
   * 2024-08-26
   */
  vailddate?: string;
  /**
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponDescription: 'CouponDescription',
      expireddate: 'Expireddate',
      limitPerPerson: 'LimitPerPerson',
      productTypeShrink: 'ProductType',
      purchaseType: 'PurchaseType',
      reasonForApplication: 'ReasonForApplication',
      templateName: 'TemplateName',
      vailddate: 'Vailddate',
      vaildperioddays: 'Vaildperioddays',
      validUntil: 'ValidUntil',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      applicableProducts: 'string',
      costBearer: 'string',
      couponDescription: 'string',
      expireddate: 'string',
      limitPerPerson: 'string',
      productTypeShrink: 'string',
      purchaseType: 'string',
      reasonForApplication: 'string',
      templateName: 'string',
      vailddate: 'string',
      vaildperioddays: 'string',
      validUntil: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCouponTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateCouponTemplateResponseBodyData;
  /**
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2103a30617045934095083027d88c5
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
      data: CreateCouponTemplateResponseBodyData,
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

export class CreateCustomerRequest extends $tea.Model {
  /**
   * @remarks
   * Customer\\"s name.
   * 
   * This parameter is required.
   * 
   * @example
   * DoorBell Marketing
   */
  customerName?: string;
  /**
   * @remarks
   * The source/channel that allow client to connected with us. Please enumerate with Customer Source.
   * 
   * This parameter is required.
   * 
   * @example
   * website
   */
  customerSource?: string;
  /**
   * @remarks
   * The sub-industry that Customer\\"s business belongs to. Please enumerate with Customer Trade.
   * 
   * @example
   * 0101
   */
  customerSubTrade?: string;
  /**
   * @remarks
   * The industry that Customer\\"s business belongs to. Please enumerate with Customer Trade.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  customerTrade?: string;
  /**
   * @remarks
   * The region that Customer choose to launch the Cloud Service. Please use ListCountries to confirm the valid region list for current UID.
   * 
   * This parameter is required.
   * 
   * @example
   * AR
   */
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
  /**
   * @remarks
   * Code indicating whether the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data indicating whether a customer was successfully created. If it\\"s "true", the Message contains CID.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Massage indicating whether the call was successful.
   * 
   * @example
   * 12345
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * A9B725C7-3DBD-576B-AC91-F6F22AB99A77
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call it self was successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * End Date Format: yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-09-24
   */
  endDate?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * This parameter is required.
   * 
   * @example
   * 5113766248601929
   */
  endUserPk?: number;
  /**
   * @remarks
   * Multilingual Parameters, the default language is English.</br>
   * en: English</br>
   * zh: Chinese</br>
   * ja: Japanese </br>
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Operation Type Enum</br>
   * all All types</br>
   * quota_create Create quota</br>
   * quota_amount_adjust Adjust the amount of quota</br>
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  operationType?: string;
  /**
   * @remarks
   * Pagination, current page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Pagination, record number on each page. Maximum 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Date Format: yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-02
   */
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
  /**
   * @remarks
   * Status code of returning result, 200 means success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Listed data of returning result
   */
  data?: CustomerQuotaRecordListResponseBodyData[];
  /**
   * @remarks
   * Description of returning data
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Record number on each page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of request
   * 
   * @example
   * 2103a0ae16849855284594613d874e
   */
  requestId?: string;
  /**
   * @remarks
   * Total volume
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The Deducted Credit to be offset.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  deductAmount?: string;
  /**
   * @remarks
   * Account UID of Distribution Customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1133166938931507
   */
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
  /**
   * @remarks
   * Result Code. Value Range:
   * - 200 OK
   * - 1109 System Error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Same as Code Parameter Value.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * Shutdown Status</br>
   * 
   * - postPayFreeze, the account have been blocked</br>
   * 
   * - postPayThaw, the account have been unlocked</br>
   * 
   * @example
   * postPayFreeze
   */
  creditStatus?: string;
  /**
   * @remarks
   * UID
   * 
   * @example
   * 1792155717328010
   */
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
  /**
   * @remarks
   * Status Code</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Success or not</br>
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Request ID</br>
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
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
  /**
   * @remarks
   * New Purchase Status</br>
   * 
   * - cancelBan: Cancel the restriction for New Purchase request</br>
   * 
   * - ban: ban the New Purchase request</br>
   * 
   * @example
   * cancelBan
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * @example
   * 1133166938931507
   */
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
  /**
   * @remarks
   * Status Code</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Success or not</br>
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Request ID</br>
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
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
  /**
   * @remarks
   * UID
   * 
   * @example
   * Shutdown Policy</br>
   * 
   * - immediatelyStop, The instances of the specified End User\\"s account will be shutdown immediately once EU triggered the Shutdown Policy.</br>
   * 
   * - delayStop, The instances of the specified End User\\"s account will be shutdown later, even EU have triggered the Shutdown Policy.</br>
   * 
   * - noStop, The instances of the specified End User\\"s account will not be shutdown, after EU have triggered the Shutdown Policy.</br>
   */
  shutdownPolicy?: string;
  /**
   * @remarks
   * No Change History
   * 
   * @example
   * 1263644979775567
   */
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
  /**
   * @remarks
   * Success or not</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Request ID</br>
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * Message</br>
   */
  message?: string;
  /**
   * @remarks
   * NO_STOP
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
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
  /**
   * @remarks
   * End Date Format:  yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-24
   */
  endDate?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * This parameter is required.
   * 
   * @example
   * 5113766248601929
   */
  endUserPk?: number;
  /**
   * @remarks
   * Multilingual Parameters, the default language is English.</br>
   * en: English</br>
   * zh: Chinese</br>
   * ja: Japanese </br>
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Operation Type Enum</br>
   * all All types</br>
   * quota_create Create quota</br>
   * quota_amount_adjust Adjust the amount of quota</br>
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  operationType?: string;
  /**
   * @remarks
   * Start Date Format:  yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-11-10
   */
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
  /**
   * @remarks
   * Code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ExportCustomerQuotaRecordResponseBodyData;
  /**
   * @remarks
   * Description
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * ID of the Request
   * 
   * @example
   * 210bc4b416874189683843905d9f9a
   */
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
  /**
   * @remarks
   * Message
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Success
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 10 (Value <= 20)
   * 
   * @example
   * 1215848086704806
   */
  uid?: number;
  /**
   * @remarks
   * Result Code - Error Code. Value Range:
   * - 200 OK
   * - 1109 System Error
   * - 3029: Invalid UID
   * - 3062: UID and UserType are both empty.
   * - 3063: UserType value out of range.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Account Type:
   * - 1 Agency\\"s End User
   * - 2 Reseller\\"s End User
   * - 3 Enterprise
   * - 4 T2 Agency Partner
   * - 5 T2 Reseller Partner
   * - 6 T2 Agency+Reseller Partner
   */
  accountInfoList?: GetAccountInfoResponseBodyAccountInfoList;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * message
   * 
   * @example
   * Pagination Information
   */
  message?: string;
  /**
   * @remarks
   * Pagination, page volume in total.
   */
  pageInfo?: GetAccountInfoResponseBodyPageInfo;
  /**
   * @remarks
   * Request id, a unique identifier generated by Alibaba cloud for the request.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Pagination, record number on each page.
   * 
   * @example
   * true
   */
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

export class GetCoupondeductProductCodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoupondeductProductCodeResponseBody extends $tea.Model {
  /**
   * @example
   * code
   */
  code?: string;
  data?: GetCoupondeductProductCodeResponseBodyData[];
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 210e876f16704666020714468dab35
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
      data: { 'type': 'array', 'itemType': GetCoupondeductProductCodeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoupondeductProductCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCoupondeductProductCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCoupondeductProductCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoRequest extends $tea.Model {
  /**
   * @remarks
   * Sub Account UID
   * 
   * This parameter is required.
   * 
   * @example
   * 1792155717328010
   */
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
  /**
   * @remarks
   * Result Code:
   * - 200 OK
   * - 1109 System Error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCreditInfoResponseBodyData;
  /**
   * @remarks
   * Message Information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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

export class GetCustomerOrdersRequest extends $tea.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * myBd
   */
  customerManager?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-23 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 209335720330622
   */
  orderId?: number;
  /**
   * @example
   * 0
   */
  orderSource?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @example
   * RENEW
   */
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * vm_intl
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-13 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerManager: 'CustomerManager',
      customerUid: 'CustomerUid',
      endDate: 'EndDate',
      orderId: 'OrderId',
      orderSource: 'OrderSource',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerManager: 'string',
      customerUid: 'number',
      endDate: 'string',
      orderId: 'number',
      orderSource: 'number',
      orderStatus: 'number',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
      timeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrdersResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomerOrdersResponseBodyData[];
  message?: string;
  msg?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 23309219-4A34-589D-A3E0-9B2A3BFFD24F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCustomerOrdersResponseBodyData },
      message: 'string',
      msg: 'string',
      pageNo: 'number',
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

export class GetCustomerOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomerOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillRequest extends $tea.Model {
  /**
   * @remarks
   * Bill Owner type. Value Range:</br>
   * 1: Master account</br>
   * 2: Sub account</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * BillType. Value Range:</br>
   * 
   * - DailyOrder(Deprecated)
   * - DailyBill (Deprecated)
   * - DailyInstanceBill (Deprecated)
   * - DailyInstanceBillV2
   * 
   * This parameter is required.
   * 
   * @example
   * DailyInstanceBillV2
   */
  billType?: string;
  /**
   * @remarks
   * Billing date. Format YYYY-MM-DD
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-24
   */
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
  /**
   * @remarks
   * Result Code:
   * * 200 OK
   * * 1109 System error
   * * 3050 Bill Type can only be DailyOrder, DailyBill or DailyInstanceBill.
   * * 3049 Incorrect format of Spending Time.
   * * 3048 Bill Owner can only be 1 or 2.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetDailyBillResponseBodyData;
  /**
   * @remarks
   * Same as Code parameters.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * inviteId list</br>
   * `Sub-levels <= 5`
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Status Code. Error Code:
   * 
   * - 3057 InviteId is empty
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInviteStatusResponseBodyData;
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
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * Bill Owner type. Value Range:</br>
   * 1: Master account</br>
   * 2: Sub account</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * Value Range:
   * 
   * - MonthlyInvoice
   * - MonthRefundInvoice
   * - MonthlySummary
   * - MonthlyInstanceAddAdjustBill 
   * - MonthlyInstanceRefundBill
   * - MonthlyAddAdjustInvoce
   * - MonthlyRefundAdjustInvoce 
   * - MonthlyInstanceConsumeV2 
   * - MarginReportV2
   * 
   * This parameter is required.
   * 
   * @example
   * MonthlyInvoice
   */
  billType?: string;
  /**
   * @remarks
   * Billing Month, Format is YYYY-MM
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11
   */
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
  /**
   * @remarks
   * Result Code:
   * * 200 OK
   * * 1109 System error
   * * 3030 Sub Account Nickname exceeds maximum length, maximum length 150 bytes.
   * * 3031 Remark exceeds maximum length, maximum length 3000 bytes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMonthlyBillResponseBodyData;
  /**
   * @remarks
   * Same as Code parameters.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * Pagination, current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Pagination, record number on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Error Code, Candidate Value：
   * * 200: OK
   * * 1109: System error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of Invitation Information
   */
  inviteInfoList?: GetUnassociatedCustomerResponseBodyInviteInfoList;
  /**
   * @remarks
   * Message information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Pagination Information
   */
  pageInfo?: GetUnassociatedCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * 23309219-4A34-589D-A3E0-9B2A3BFFD24F
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * List of invited account information,  less than 5 accounts at a time.</br>
   * `Sub-levels <= 5`
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Error Code: </br>
   * • 200 OK</br>
   * • 1109 System Error</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * List of invitation sending results
   */
  results?: InviteSubAccountResponseBodyResults;
  /**
   * @remarks
   * Candidate Values: True/False, this value states if the current API calling action is successful. It does not guarantee the success of subsequent business operations.
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

export class IssueCouponForCustomerRequest extends $tea.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111,2222
   */
  uidlist?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      couponTemplateId: 'CouponTemplateId',
      uidlist: 'Uidlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      couponTemplateId: 'number',
      uidlist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueCouponForCustomerResponseBody extends $tea.Model {
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  data?: IssueCouponForCustomerResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: IssueCouponForCustomerResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IssueCouponForCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IssueCouponForCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IssueCouponForCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCountriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error Code
   * * 200: OK
   * * 1109: System error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of Region Code
   */
  data?: string[];
  /**
   * @remarks
   * Message information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * A747A00F-E096-5244-88B3-3E474BAE3AE4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  /**
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * 1133166938931507
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListCouponUsageResponseBodyData[];
  message?: string;
  pageInfo?: ListCouponUsageResponseBodyPageInfo;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
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
  /**
   * @remarks
   * Pagination, current page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Multilingual Parameters, the default language is English.</br>
   * en: English</br>
   * zh: Chinese</br>
   * ja: Japanese </br>
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Pagination, record number on each page, maximum 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Status code of returning result, 200 means success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Listed data of returning result
   */
  data?: QuotaListExportPagedResponseBodyData[];
  /**
   * @remarks
   * Description of returning result
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Record number on each page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the Request
   * 
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * Total volume
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Invitation ID, from interface InviteSubAccount </br>
   * Note: This field type is Long, which may result in precision loss in serialization/deserialization process. Please ensure the value does not exceed 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 176
   */
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
  /**
   * @remarks
   * Result Code, Error code.</br>
   * Candidate Value: </br>
   * * 200: OK
   * * 1109: System error
   * * 3058: Frequent sending, the limit is 10 emails in every 5 minutes.
   * * 3057: InviteId is empty.
   * * 3060: Can\\"t find sending record of given InviteId.
   * * 3061: Registration URL is expired, unable to resend.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Result message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * Result Code:
   * *   200 OK
   * *   1109 System error
   * *   3030 Sub Account Nickname exceeds maximum length,  maximum length 150 bytes.
   * *   3031 Remark exceeds maximum length,  maximum length 3000 bytes.
   * 
   * @example
   * Message information
   */
  accountNickname?: string;
  /**
   * @remarks
   * Customer manager（limited 50 character）
   * 
   * @example
   * abc
   */
  customerBd?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   */
  remark?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * This parameter is required.
   * 
   * @example
   * 1133166938931507
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
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
  /**
   * @remarks
   * New Credit Line
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  /**
   * @remarks
   * The UID of Sub Account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1263644979775567
   */
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
  /**
   * @remarks
   * Result Code:
   * *   200 OK
   * *   1109 system error
   * *   3040 Sub Account is in a frozen state and cannot be operated.
   * *   3041 Credit is not a proper number
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Same as Code parameter value
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
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
  /**
   * @remarks
   * The UID of the partner‘s customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792155717328010
   */
  uid?: number;
  /**
   * @remarks
   * Percentage, 1 to 100. When the available credit limit is lower than the credit limit percentage, an email is sent to the main account.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * Result Code:
   * * 200 OK
   * * 1109 System Error
   * * 3040 The Sub Account is frozen, the operation cannot be completed. 
   * * 3044 Alert proportion value is not a number.
   * * 3045 Alert proportion value should between 1 to 100.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Same as Code parameter value
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True or False, which indicates whether the current API call itself is successful. does not represent the success of subsequent business operations.
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
  /**
   * @remarks
   * The start month from which the bills are pushed. Specify the value in the yyyy-MM format.
   * 
   * After the subscription is generated, the system automatically pushes the bill data that is generated from the month that you specified to the current point in time. Data of up to six months can be pushed. The current month is included. If you subscribe to the bills for more than six months, the subscription is invalid.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  beginBillingCycle?: string;
  /**
   * @remarks
   * The file format of the bill. Valid values: csv and parquet.
   * 
   * If you subscribe to the bills of multiple file formats, we recommend that you store the bills in different OSS buckets to prevent file overwriting.
   * 
   * This parameter is required.
   * 
   * @example
   * csv
   */
  billFormat?: string;
  /**
   * @remarks
   * The ID of the user to which the OSS bucket belongs.
   * 
   * If you are an eco-partner of Alibaba Cloud and you need to push the bills to the OSS bucket of a subordinate partner account, you must set this parameter to the ID of the subordinate partner account and grant the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission to the subordinate partner account.
   * 
   * If you are an eco-partner of Alibaba Cloud and you need to push the bills to the OSS bucket of your own account, your account must be granted the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * 
   * This parameter is required.
   * 
   * @example
   * 5569414254138836
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket in which you want to store the bills.
   * 
   * This parameter is required.
   * 
   * @example
   * bill-bucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The maximum rows in a single bill file. If the number of bill rows exceed the upper limit, the bill is automatically split into multiple files. The name of each split file is in the `uid_billType_billCycle_SquenceNo_fileNo` format.
   * 
   * Files whose names are the same except for the fileNo field are of the same type and belong to the same billing cycle.
   * 
   * @example
   * 100000
   */
  subscribeSegmentSize?: number;
  /**
   * @remarks
   * The type of the bill to which you want to subscribe. Valid values: PartnerBillingItemDetailForBillingPeriod, PartnerBillingItemDetailMonthly, PartnerInstanceDetailForBillingPeriod, and PartnerInstanceDetailMonthly.
   * 
   * This parameter is required.
   * 
   * @example
   * PartnerBillingItemDetailForBillingPeriod
   */
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
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message that is returned.
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
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
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

export class CreateCouponTemplateResponseBodyData extends $tea.Model {
  /**
   * @example
   * Custom
   */
  applicableProducts?: string;
  /**
   * @example
   * Partner
   */
  costBearer?: string;
  /**
   * @example
   * 111111
   */
  couponTemplateID?: number;
  /**
   * @example
   * 2024-04-02 16:15:31
   */
  createTime?: string;
  /**
   * @example
   * 2024-01-01
   */
  expireddate?: string;
  productType?: string[];
  /**
   * @example
   * APPROVED
   */
  status?: string;
  templateName?: string;
  /**
   * @example
   * 2024-01-01
   */
  vailddate?: string;
  /**
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponTemplateID: 'CouponTemplateID',
      createTime: 'CreateTime',
      expireddate: 'Expireddate',
      productType: 'ProductType',
      status: 'Status',
      templateName: 'TemplateName',
      vailddate: 'Vailddate',
      vaildperioddays: 'Vaildperioddays',
      validUntil: 'ValidUntil',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      costBearer: 'string',
      couponTemplateID: 'number',
      createTime: 'string',
      expireddate: 'string',
      productType: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      templateName: 'string',
      vailddate: 'string',
      vaildperioddays: 'string',
      validUntil: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerQuotaRecordListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The way to submit the quota adjustment operation. API/ACPN
   * 
   * @example
   * ACPN
   */
  operationSubmitType?: string;
  /**
   * @remarks
   * The time of submit the quota adjustment operation.
   * 
   * @example
   * 2023-12-15 10:34:36 UTC+8
   */
  operationTime?: string;
  /**
   * @remarks
   * Operation Type Enum</br>
   * all All types</br>
   * quota_create Create quota</br>
   * quota_amount_adjust Adjust the amount of quota</br>
   * 
   * @example
   * quota_amount_adjust
   */
  operationTypeCode?: string;
  /**
   * @remarks
   * The description of submitted quota adjustment operation.
   * 
   * @example
   * Quota Adjustment
   */
  operationTypeDesc?: string;
  /**
   * @remarks
   * The UID of operator(Partner\\"s UID).
   * 
   * @example
   * 5113766248601929
   */
  operationUid?: string;
  /**
   * @remarks
   * Updated quota amount
   * 
   * @example
   * 121.00
   */
  updateAfterAmount?: string;
  /**
   * @remarks
   * The difference amount between updated quota and original quota.
   * 
   * @example
   * -100.00
   */
  updateAmount?: string;
  /**
   * @remarks
   * Original quota amount
   * 
   * @example
   * 221.00
   */
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
  /**
   * @remarks
   * Estimated duration, in minutes.
   * 
   * @example
   * 1
   */
  cost?: number;
  /**
   * @remarks
   * ID of Export task
   * 
   * @example
   * 1231
   */
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
  /**
   * @remarks
   * The E-mail of Distribution Customer.
   * 
   * @example
   * Description of Distribution Customer.
   */
  accountNickname?: string;
  /**
   * @remarks
   * Account CID of Distribution Customer.
   * 
   * @example
   * 1234@qq.com
   */
  aliyunId?: string;
  /**
   * @remarks
   * XXX Technology LTD.
   * 
   * @example
   * 2021-01-01
   */
  associationSuccessTime?: string;
  /**
   * @remarks
   * customer\\"s CID
   * 
   * @example
   * 61479572
   */
  cid?: number;
  /**
   * @remarks
   * customer manager
   * 
   * @example
   * abc
   */
  customerBd?: string;
  /**
   * @remarks
   * The account have Shutdown-delay Privilege, After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.
   * 
   * @example
   * 600
   */
  delayAmount?: string;
  /**
   * @remarks
   * Partner\\"s Shutdown Policy Management for Sub Account.
   * 1: delayStop. The account have Shutdown-delay Privilege, After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.
   * 2: noStop. Partner will manually manage Shutdown Status for Sub Account. Meanwhile, System would not manage the resource\\"s life-circle of Sub Account.
   * 3: immediatelyStop. Once valid quota of Sub Account falls below 0 and be identified as defaulting account, it will trigger the instance shutdown immediately.
   * 
   * @example
   * noStop
   */
  delayStatus?: string;
  /**
   * @remarks
   * Sub Account
   * 
   * @example
   * 1234@qq.com
   */
  email?: string;
  /**
   * @remarks
   * Account UID of Distribution Customer.
   * 
   * @example
   * 13641588680
   */
  mobile?: string;
  /**
   * @remarks
   * Purchase Forbidden：Ban the new purchase action
   * normal：Normal--End Use can issue Cloud Resource order immediately.
   * 
   * @example
   * Normal
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Valid mobile number of Distribution Customer.
   * 
   * @example
   * Alibaba Cloud Login name of Distribution Customer.
   */
  remark?: string;
  /**
   * @remarks
   * The name of Sub Account:
   * 1.	Use the official name of Company, if Sub Account is an enterprise.
   * 2.	Use the official name of Partner, if Sub Account is a T2 reseller.
   * 
   * @example
   * 1
   */
  subAccountType?: number;
  /**
   * @remarks
   * Request ID, the unique request identifier generated by Alibaba Cloud.
   * 
   * @example
   * 1415740779475837
   */
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
  /**
   * @remarks
   * Account Information
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Pagination, current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of Account Information
   * 
   * @example
   * 12
   */
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

export class GetCoupondeductProductCodeResponseBodyData extends $tea.Model {
  /**
   * @example
   * code1
   */
  productType?: any;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreditInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The Credit Control status, Value Range:</br>
   * 1. normal - Sub Account status is running as usual.
   * 2. arrearsNotShutdown - Sub Account status is running as usual, but have outstanding bill(s).
   * 3. shutdown -  Sub Account status is down.
   * 
   * @example
   * normal
   */
  accountStatus?: string;
  /**
   * @remarks
   * Percentage value, when the available credit limit is lower than this credit limit percentage, a notification E-mail will be sent to the main account.
   * 
   * @example
   * 20
   */
  alarmThreshold?: string;
  /**
   * @remarks
   * The Credit available to consume.
   * 
   * @example
   * 800
   */
  availableCredit?: string;
  /**
   * @remarks
   * Obtain total unpaid amount on demo bill before simulated deduction.
   * 
   * @example
   * 0.000000
   */
  consumedUndeductedValue?: string;
  /**
   * @remarks
   * The Credit Line of Sub Account
   * 
   * @example
   * 1000
   */
  creditLine?: string;
  /**
   * @remarks
   * The Credit have been consumed by Sub Account, and haven\\"t be paid.
   * 
   * @example
   * 200
   */
  outstandingBalance?: string;
  /**
   * @remarks
   * The systematic controlling policy for resource management, specifically when the available Credit of Sub Account falls to 0 or less.</br>
   * 
   * - 1: delayStop. The account have Shutdown-delay Privilege,  After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.</br>
   * - 2: noStop. Partner will manually manage Shutdown Status for Sub Account. Meanwhile, System would not manage the resource\\"s life-circle of Sub Account.</br>
   * - 3: immediatelyStop. Once valid quota of Sub Account falls below 0 and be identified as defaulting account, it will trigger the instance shutdown immediately.</br>
   * 
   * @example
   * delayStop
   */
  zeroCreditShutdownPolicy?: string;
  /**
   * @remarks
   * Manage order operation.
   * - ban：Ban the new purchase action.
   * - normal：The account could raise new purchase order as usual.
   * 
   * @example
   * ban
   */
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

export class GetCustomerOrdersResponseBodyData extends $tea.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * myBd
   */
  customerManager?: string;
  /**
   * @example
   * 123456
   */
  customerNo?: number;
  /**
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @example
   * 0
   */
  orderSource?: string;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * 3.92
   */
  originalCost?: number;
  /**
   * @example
   * 3:32
   */
  paymentMethod?: string;
  /**
   * @example
   * 2024-08-13 13:02:02
   */
  paymentTime?: string;
  /**
   * @example
   * 3.92
   */
  pretaxCost?: number;
  /**
   * @example
   * oss
   */
  productDetail?: string;
  /**
   * @example
   * snapshot
   */
  productType?: string;
  /**
   * @example
   * 2024-08-13 13:02:02
   */
  timeToOrder?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerManager: 'CustomerManager',
      customerNo: 'CustomerNo',
      orderId: 'OrderId',
      orderSource: 'OrderSource',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalCost: 'OriginalCost',
      paymentMethod: 'PaymentMethod',
      paymentTime: 'PaymentTime',
      pretaxCost: 'PretaxCost',
      productDetail: 'ProductDetail',
      productType: 'ProductType',
      timeToOrder: 'TimeToOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerManager: 'string',
      customerNo: 'number',
      orderId: 'number',
      orderSource: 'string',
      orderStatus: 'number',
      orderType: 'string',
      originalCost: 'number',
      paymentMethod: 'string',
      paymentTime: 'string',
      pretaxCost: 'number',
      productDetail: 'string',
      productType: 'string',
      timeToOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyBillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The link to download CSV file, please use HTTP Protocol.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  billLinkCSV?: string;
  /**
   * @remarks
   * The link to download XLSX file, please use HTTP Protocol.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  billLinkXLSX?: string;
  /**
   * @remarks
   * Same as inserted parameter BillOwner.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * Same as inserted parameter BillType.
   * 
   * @example
   * DailyInstanceBillV2
   */
  billType?: string;
  /**
   * @remarks
   * Spending Time, refer to the exact time of costuming.
   * 
   * @example
   * 20221201
   */
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
  /**
   * @remarks
   * Invitation ID, From interface InviteSubAccount
   * 
   * @example
   * 123
   */
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
  /**
   * @remarks
   * The time that Distribution Customer successfully associated with Distributor.</br>
   * This value will be empty if there is no existing association.
   * 
   * @example
   * 2018-02-13
   */
  associationSuccessTime?: string;
  /**
   * @remarks
   * Distribution Customer\\"s CID
   * 
   * @example
   * 1234567890123
   */
  cid?: number;
  /**
   * @remarks
   * The time of email been sent out.
   * 
   * @example
   * 2018-02-12
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * 1093238769140523
   */
  parentId?: string;
  /**
   * @remarks
   * Invitation Status:
   * * 0 No visit on registration URL
   * * 1 Successful Registration
   * * 2 Unsuccessful Registration
   * * 3 Registration URL have been visited, but no submitted sheet/ticket.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Account Type:
   * - 1 Agency\\"s End User
   * - 2 Reseller\\"s End User
   * - 5 T2 Reseller Partner
   * 
   * @example
   * 1
   */
  subAccountType?: string;
  /**
   * @remarks
   * Distribution Customer\\"s UID
   * 
   * @example
   * 1234567890123
   */
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
  /**
   * @remarks
   * Result Code. Value Range:
   * *   200 OK
   * *   1109 system error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of Invitation Status result
   */
  inviteStatusList?: GetInviteStatusResponseBodyDataInviteStatusInviteStatusList;
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
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The link to download CSV file, please use HTTP Protocol.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  billLinkCSV?: string;
  /**
   * @remarks
   * The link to download XLSX file, please use HTTP Protocol.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  billLinkXLSX?: string;
  /**
   * @remarks
   * Same as inserted parameter BillOwner.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * Same as inserted parameter BillType.
   * 
   * @example
   * MonthlyInvoice
   */
  billType?: string;
  /**
   * @remarks
   * The URL to download invoice.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  invoiceLink?: string;
  /**
   * @remarks
   * It states the existence of refund invoice. </br>
   * Candidate Values: True/False
   * 
   * @example
   * True
   */
  refundInvoiceFlag?: boolean;
  /**
   * @remarks
   * The URL to download refund invoice.
   * 
   * @example
   * intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
   */
  refundInvoiceLink?: string;
  /**
   * @remarks
   * Spending Time, refer to the exact time of costuming.
   * 
   * @example
   * 20221201
   */
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
  /**
   * @remarks
   * The name of Customer who are to be invited.
   * 
   * @example
   * My Client
   */
  accountNickname?: string;
  /**
   * @remarks
   * The Email of Customer who are to be invited.
   * 
   * @example
   * 12345@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The time of email been sent out.
   * 
   * @example
   * 2023-05-10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Invitation ID
   * 
   * @example
   * 190
   */
  inviteId?: number;
  /**
   * @remarks
   * Invitation Status:
   * * 0 No visit on registration URL
   * * 1 Successful Registration
   * * 2 Unsuccessful Registration
   * * 3 Registration URL have been visited, but no submitted sheet/ticket.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Pagination, current page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Pagination, record number on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Pagination, page volume in total.
   * 
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The name of Sub Account:</br>
   * 1. Use the official name of Company, if Sub Account is an enterprise.</br>
   * 2. Use the official name of Partner, if Sub Account is a T2 reseller.</br>
   * 
   * This parameter is required.
   * 
   * @example
   * XXX Technology LTD.
   */
  accountNickname?: string;
  /**
   * @remarks
   * The total budget Credit of Sub Account that distributed by Partner.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  customerBd?: string;
  /**
   * @remarks
   * Customer ID, Returning ID from CreateCustomer API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  customerId?: string;
  /**
   * @remarks
   * The email address of End User,  which will receive the invitation email.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345@163.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * Initial Order Status</br>
   * 1. ban：Ban the new purchase action--After End User finish registration and authorization, they can\\"t issue Cloud Resource order immediately. Partner should manually update the "Order Control" settings as "Normal" to enable new order.</br>
   * 2. normal：Normal--After End User finished registration and authorization, they can issue Cloud Resource order immediately.</br>
   * 
   * This parameter is required.
   * 
   * @example
   * ban
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Description of Sub Account.
   * 
   * @example
   * The invitation to develop XX as a Sub Account
   */
  remark?: string;
  /**
   * @remarks
   * The type of Sub Account</br>
   * 
   * 1 Agency\\"s End User</br>
   * 2 Reseller\\"s End user</br>
   * 5 Reseller\\"s T2 Partner</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  subAccountType?: string;
  /**
   * @remarks
   * Partner\\"s Shutdown Policy Management for Sub Account.</br>
   * 1: delayStop. The account have Shutdown-delay Privilege,  After Shutdown-delay Credit is ran out, Alibaba Cloud will take over resources and keep the instance for 15 days. In addition, the instance will be released if Sub Account failed to pay the bill within these 15 days.</br>
   * 2: noStop. Partner will manually manage Shutdown Status for Sub Account. Meanwhile, System would not manage the resource\\"s life-circle of Sub Account.</br>
   * 3: immediatelyStop. Once valid quota of Sub Account falls below 0 and be identified as defaulting account, it will trigger the instance shutdown immediately.</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Valid days of registration URL, count on daily basis.
   * 
   * @example
   * 15
   */
  days?: number;
  /**
   * @remarks
   * Invitation ID, The invitation status tracking code.
   * 
   * @example
   * 12345
   */
  inviteId?: number;
  /**
   * @remarks
   * URL for Partner Customer Registration.
   * 
   * @example
   * http://agency-intl.console.aliyun.com/customer/register?intl=true&fxinfo=-4uT%2FMWHnnUdvr5GXVd1AYK8luTnGgH3M7Y3lSCd5M1fxRwAkViTWtDJDpckh0HL
   */
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
  /**
   * @remarks
   * Error Code, 200 OK
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message, Notes of Code
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Returning Message of Invitation Results
   */
  result?: InviteSubAccountResponseBodyResultsResultResult;
  /**
   * @remarks
   * Always true.
   * 
   * @example
   * true
   */
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

export class IssueCouponForCustomerResponseBodyData extends $tea.Model {
  /**
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @example
   * 2024-03-05 18:24:07
   */
  createTime?: string;
  /**
   * @example
   * 111,2222
   */
  uidlist?: string;
  static names(): { [key: string]: string } {
    return {
      couponTemplateId: 'CouponTemplateId',
      createTime: 'CreateTime',
      uidlist: 'Uidlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponTemplateId: 'number',
      createTime: 'string',
      uidlist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponUsageResponseBodyData extends $tea.Model {
  /**
   * @example
   * oqevfbveuadcrduzmf@ttirv.net
   */
  account?: string;
  amount?: number;
  /**
   * @example
   * 0.01
   */
  balance?: number;
  /**
   * @example
   * 59226280
   */
  couponId?: string;
  /**
   * @example
   * 503802
   */
  couponTemplateId?: number;
  /**
   * @example
   * 2023-04-06 00:00:00 ~ 2023-04-07 00:00:00
   */
  effDate?: string;
  /**
   * @example
   * 2023-04-06 19:32:10
   */
  publishDate?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * 1647668856741998
   */
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
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 300
   */
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
  /**
   * @remarks
   * Create Time
   * 
   * @example
   * 2023-12-21 21:31:57 UTC+8
   */
  createTime?: string;
  /**
   * @remarks
   * File Name
   * 
   * @example
   * 5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
  fileName?: string;
  /**
   * @remarks
   * Notification Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Display of Task Status
   * 
   * @example
   * 3
   */
  status?: string;
  /**
   * @remarks
   * Task Status Enum</br>
   * 2: Exporting</br>
   * 3: Export Success</br>
   * -1: Export Fail</br>
   * 
   * @example
   * Export Success
   */
  statusCode?: string;
  /**
   * @remarks
   * The link to download exported file.
   * 
   * @example
   * //aliyun-eco-market-servic-singapore.oss-ap-southeast-1.aliyuncs.com/5113766248601929_quota_2023-06-22_2023-12-21_all_2023122121310057
   */
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
   * Cancels the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * You can call this operation to cancel the subscription to only one type of bill at a time.
   * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
   * **This topic is published only on the international site (alibabacloud.com).
   * 
   * @param request - CancelSubscriptionBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSubscriptionBillResponse
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
   * Cancels the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * You can call this operation to cancel the subscription to only one type of bill at a time.
   * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
   * **This topic is published only on the international site (alibabacloud.com).
   * 
   * @param request - CancelSubscriptionBillRequest
   * @returns CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBill(request: CancelSubscriptionBillRequest): Promise<CancelSubscriptionBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSubscriptionBillWithOptions(request, runtime);
  }

  /**
   * 创建优惠券模板
   * 
   * @param tmpReq - CreateCouponTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCouponTemplateResponse
   */
  async createCouponTemplateWithOptions(tmpReq: CreateCouponTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCouponTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCouponTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.productType)) {
      request.productTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productType, "ProductType", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.applicableProducts)) {
      query["ApplicableProducts"] = request.applicableProducts;
    }

    if (!Util.isUnset(request.costBearer)) {
      query["CostBearer"] = request.costBearer;
    }

    if (!Util.isUnset(request.couponDescription)) {
      query["CouponDescription"] = request.couponDescription;
    }

    if (!Util.isUnset(request.expireddate)) {
      query["Expireddate"] = request.expireddate;
    }

    if (!Util.isUnset(request.limitPerPerson)) {
      query["LimitPerPerson"] = request.limitPerPerson;
    }

    if (!Util.isUnset(request.productTypeShrink)) {
      query["ProductType"] = request.productTypeShrink;
    }

    if (!Util.isUnset(request.purchaseType)) {
      query["PurchaseType"] = request.purchaseType;
    }

    if (!Util.isUnset(request.reasonForApplication)) {
      query["ReasonForApplication"] = request.reasonForApplication;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.vailddate)) {
      query["Vailddate"] = request.vailddate;
    }

    if (!Util.isUnset(request.vaildperioddays)) {
      query["Vaildperioddays"] = request.vaildperioddays;
    }

    if (!Util.isUnset(request.validUntil)) {
      query["ValidUntil"] = request.validUntil;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCouponTemplate",
      version: "2022-12-16",
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

  /**
   * 创建优惠券模板
   * 
   * @param request - CreateCouponTemplateRequest
   * @returns CreateCouponTemplateResponse
   */
  async createCouponTemplate(request: CreateCouponTemplateRequest): Promise<CreateCouponTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCouponTemplateWithOptions(request, runtime);
  }

  /**
   * This function is designed for create a customer who is to be invited.
   * 
   * @param request - CreateCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomerResponse
   */
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

  /**
   * This function is designed for create a customer who is to be invited.
   * 
   * @param request - CreateCustomerRequest
   * @returns CreateCustomerResponse
   */
  async createCustomer(request: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomerWithOptions(request, runtime);
  }

  /**
   * Query quota adjustment list of Distribution Customer from International Site. Not available on Domestic Site.
   * 
   * @param request - CustomerQuotaRecordListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CustomerQuotaRecordListResponse
   */
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

  /**
   * Query quota adjustment list of Distribution Customer from International Site. Not available on Domestic Site.
   * 
   * @param request - CustomerQuotaRecordListRequest
   * @returns CustomerQuotaRecordListResponse
   */
  async customerQuotaRecordList(request: CustomerQuotaRecordListRequest): Promise<CustomerQuotaRecordListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customerQuotaRecordListWithOptions(request, runtime);
  }

  /**
   * This API is used to offset the Deducted Credit of a Distribution Customer. For example, if the current Deducted Credit is 500 and the Available Credit is 1000, by offsetting 300, the Deducted Credit will then become 200, and the Available Credit becomes 1300.
   * 
   * @remarks
   * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
   * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
   * 
   * @param request - DeductOutstandingBalanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeductOutstandingBalanceResponse
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
   * This API is used to offset the Deducted Credit of a Distribution Customer. For example, if the current Deducted Credit is 500 and the Available Credit is 1000, by offsetting 300, the Deducted Credit will then become 200, and the Available Credit becomes 1300.
   * 
   * @remarks
   * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
   * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
   * 
   * @param request - DeductOutstandingBalanceRequest
   * @returns DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalance(request: DeductOutstandingBalanceRequest): Promise<DeductOutstandingBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deductOutstandingBalanceWithOptions(request, runtime);
  }

  /**
   * Set the after-shutdown instance status for post-pay End Users as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditEndUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditEndUserStatusResponse
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
   * Set the after-shutdown instance status for post-pay End Users as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditEndUserStatusRequest
   * @returns EditEndUserStatusResponse
   */
  async editEndUserStatus(request: EditEndUserStatusRequest): Promise<EditEndUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editEndUserStatusWithOptions(request, runtime);
  }

  /**
   * Set the New Buy status for Sub-Customer as a Partner.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditNewBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditNewBuyStatusResponse
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
   * Set the New Buy status for Sub-Customer as a Partner.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditNewBuyStatusRequest
   * @returns EditNewBuyStatusResponse
   */
  async editNewBuyStatus(request: EditNewBuyStatusRequest): Promise<EditNewBuyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editNewBuyStatusWithOptions(request, runtime);
  }

  /**
   * Modify the End User\\"s Shutdown Policy as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditZeroCreditShutdownRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditZeroCreditShutdownResponse
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
   * Modify the End User\\"s Shutdown Policy as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditZeroCreditShutdownRequest
   * @returns EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdown(request: EditZeroCreditShutdownRequest): Promise<EditZeroCreditShutdownResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editZeroCreditShutdownWithOptions(request, runtime);
  }

  /**
   * Export quota amount adjustment history as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - ExportCustomerQuotaRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCustomerQuotaRecordResponse
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
   * Export quota amount adjustment history as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - ExportCustomerQuotaRecordRequest
   * @returns ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecord(request: ExportCustomerQuotaRecordRequest): Promise<ExportCustomerQuotaRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportCustomerQuotaRecordWithOptions(request, runtime);
  }

  /**
   * Return Distribution Customer\\"s account information.
   * 
   * @param request - GetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountInfoResponse
   */
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

  /**
   * Return Distribution Customer\\"s account information.
   * 
   * @param request - GetAccountInfoRequest
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(request: GetAccountInfoRequest): Promise<GetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(request, runtime);
  }

  /**
   * 国际渠道分销优惠券可抵扣产品
   * 
   * @param request - GetCoupondeductProductCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCoupondeductProductCodeResponse
   */
  async getCoupondeductProductCodeWithOptions(request: GetCoupondeductProductCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetCoupondeductProductCodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCoupondeductProductCode",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCoupondeductProductCodeResponse>(await this.callApi(params, req, runtime), new GetCoupondeductProductCodeResponse({}));
  }

  /**
   * 国际渠道分销优惠券可抵扣产品
   * 
   * @param request - GetCoupondeductProductCodeRequest
   * @returns GetCoupondeductProductCodeResponse
   */
  async getCoupondeductProductCode(request: GetCoupondeductProductCodeRequest): Promise<GetCoupondeductProductCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCoupondeductProductCodeWithOptions(request, runtime);
  }

  /**
   * Query Credit Control information of Distribution Customers. The PopCreditInfoJson in the Return Parameter will be empty if the Distribution Customer is an Agency. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetCreditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreditInfoResponse
   */
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

  /**
   * Query Credit Control information of Distribution Customers. The PopCreditInfoJson in the Return Parameter will be empty if the Distribution Customer is an Agency. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetCreditInfoRequest
   * @returns GetCreditInfoResponse
   */
  async getCreditInfo(request: GetCreditInfoRequest): Promise<GetCreditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCreditInfoWithOptions(request, runtime);
  }

  /**
   * 客户订单查询
   * 
   * @param request - GetCustomerOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerOrdersResponse
   */
  async getCustomerOrdersWithOptions(request: GetCustomerOrdersRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerOrdersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomerOrders",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerOrdersResponse>(await this.callApi(params, req, runtime), new GetCustomerOrdersResponse({}));
  }

  /**
   * 客户订单查询
   * 
   * @param request - GetCustomerOrdersRequest
   * @returns GetCustomerOrdersResponse
   */
  async getCustomerOrders(request: GetCustomerOrdersRequest): Promise<GetCustomerOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerOrdersWithOptions(request, runtime);
  }

  /**
   * Issue Distributor\\"s daily Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetDailyBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDailyBillResponse
   */
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

  /**
   * Issue Distributor\\"s daily Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetDailyBillRequest
   * @returns GetDailyBillResponse
   */
  async getDailyBill(request: GetDailyBillRequest): Promise<GetDailyBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDailyBillWithOptions(request, runtime);
  }

  /**
   * Query invitation status of customer who have been created and invited.
   * 
   * @param request - GetInviteStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInviteStatusResponse
   */
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

  /**
   * Query invitation status of customer who have been created and invited.
   * 
   * @param request - GetInviteStatusRequest
   * @returns GetInviteStatusResponse
   */
  async getInviteStatus(request: GetInviteStatusRequest): Promise<GetInviteStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInviteStatusWithOptions(request, runtime);
  }

  /**
   * Issue Distributor\\"s Monthly Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetMonthlyBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonthlyBillResponse
   */
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

  /**
   * Issue Distributor\\"s Monthly Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetMonthlyBillRequest
   * @returns GetMonthlyBillResponse
   */
  async getMonthlyBill(request: GetMonthlyBillRequest): Promise<GetMonthlyBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonthlyBillWithOptions(request, runtime);
  }

  /**
   * Query all the Unassociated Customer.
   * 
   * @param request - GetUnassociatedCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnassociatedCustomerResponse
   */
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

  /**
   * Query all the Unassociated Customer.
   * 
   * @param request - GetUnassociatedCustomerRequest
   * @returns GetUnassociatedCustomerResponse
   */
  async getUnassociatedCustomer(request: GetUnassociatedCustomerRequest): Promise<GetUnassociatedCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUnassociatedCustomerWithOptions(request, runtime);
  }

  /**
   * Initiate the Partner registration invitation.
   * 
   * @remarks
   * The current API request rate for the Cloud Product has not been disclosed.
   * 
   * @param request - InviteSubAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteSubAccountResponse
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
   * Initiate the Partner registration invitation.
   * 
   * @remarks
   * The current API request rate for the Cloud Product has not been disclosed.
   * 
   * @param request - InviteSubAccountRequest
   * @returns InviteSubAccountResponse
   */
  async inviteSubAccount(request: InviteSubAccountRequest): Promise<InviteSubAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteSubAccountWithOptions(request, runtime);
  }

  /**
   * 发放优惠券
   * 
   * @param request - IssueCouponForCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IssueCouponForCustomerResponse
   */
  async issueCouponForCustomerWithOptions(request: IssueCouponForCustomerRequest, runtime: $Util.RuntimeOptions): Promise<IssueCouponForCustomerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.couponTemplateId)) {
      query["CouponTemplateId"] = request.couponTemplateId;
    }

    if (!Util.isUnset(request.uidlist)) {
      query["Uidlist"] = request.uidlist;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IssueCouponForCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IssueCouponForCustomerResponse>(await this.callApi(params, req, runtime), new IssueCouponForCustomerResponse({}));
  }

  /**
   * 发放优惠券
   * 
   * @param request - IssueCouponForCustomerRequest
   * @returns IssueCouponForCustomerResponse
   */
  async issueCouponForCustomer(request: IssueCouponForCustomerRequest): Promise<IssueCouponForCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.issueCouponForCustomerWithOptions(request, runtime);
  }

  /**
   * This function is available for all Distributors. It displays the corresponding region code information based on the operable countries as agreed in the Distributor\\"s contract.
   * 
   * @remarks
   * The current API request rate for cloud products has not been disclosed.
   * 
   * @param request - ListCountriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCountriesResponse
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
   * This function is available for all Distributors. It displays the corresponding region code information based on the operable countries as agreed in the Distributor\\"s contract.
   * 
   * @remarks
   * The current API request rate for cloud products has not been disclosed.
   * @returns ListCountriesResponse
   */
  async listCountries(): Promise<ListCountriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCountriesWithOptions(runtime);
  }

  /**
   * 优惠券使用量列表查询
   * 
   * @param request - ListCouponUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCouponUsageResponse
   */
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

  /**
   * 优惠券使用量列表查询
   * 
   * @param request - ListCouponUsageRequest
   * @returns ListCouponUsageResponse
   */
  async listCouponUsage(request: ListCouponUsageRequest): Promise<ListCouponUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCouponUsageWithOptions(request, runtime);
  }

  /**
   * Check the result of export quota list as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - QuotaListExportPagedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuotaListExportPagedResponse
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
   * Check the result of export quota list as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - QuotaListExportPagedRequest
   * @returns QuotaListExportPagedResponse
   */
  async quotaListExportPaged(request: QuotaListExportPagedRequest): Promise<QuotaListExportPagedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.quotaListExportPagedWithOptions(request, runtime);
  }

  /**
   * Resend invitation email.
   * 
   * @param request - ResendEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendEmailResponse
   */
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

  /**
   * Resend invitation email.
   * 
   * @param request - ResendEmailRequest
   * @returns ResendEmailResponse
   */
  async resendEmail(request: ResendEmailRequest): Promise<ResendEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendEmailWithOptions(request, runtime);
  }

  /**
   * This function is designed for Sub Account information maintenance, including Nickname and Remark.
   * 
   * @param request - SetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccountInfoResponse
   */
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

  /**
   * This function is designed for Sub Account information maintenance, including Nickname and Remark.
   * 
   * @param request - SetAccountInfoRequest
   * @returns SetAccountInfoResponse
   */
  async setAccountInfo(request: SetAccountInfoRequest): Promise<SetAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccountInfoWithOptions(request, runtime);
  }

  /**
   * Set Credit Line for Distribution Customers. This function is only available for Resellers and Distributors.
   * 
   * @param request - SetCreditLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCreditLineResponse
   */
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

  /**
   * Set Credit Line for Distribution Customers. This function is only available for Resellers and Distributors.
   * 
   * @param request - SetCreditLineRequest
   * @returns SetCreditLineResponse
   */
  async setCreditLine(request: SetCreditLineRequest): Promise<SetCreditLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCreditLineWithOptions(request, runtime);
  }

  /**
   * You can use this API to set the threshold for the use of credit control. When the customer credit control reaches below the threshold, it will pass through the notification email distributor. This feature is for Reseller and Distributor only.
   * 
   * @param request - SetWarningThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWarningThresholdResponse
   */
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

  /**
   * You can use this API to set the threshold for the use of credit control. When the customer credit control reaches below the threshold, it will pass through the notification email distributor. This feature is for Reseller and Distributor only.
   * 
   * @param request - SetWarningThresholdRequest
   * @returns SetWarningThresholdResponse
   */
  async setWarningThreshold(request: SetWarningThresholdRequest): Promise<SetWarningThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWarningThresholdWithOptions(request, runtime);
  }

  /**
   * Generates the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
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
   * @param request - SubscriptionBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscriptionBillResponse
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
   * Generates the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
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
   * @param request - SubscriptionBillRequest
   * @returns SubscriptionBillResponse
   */
  async subscriptionBill(request: SubscriptionBillRequest): Promise<SubscriptionBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscriptionBillWithOptions(request, runtime);
  }

}
