// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetBillDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 202502
   */
  billMonth?: string;
  fileName?: string;
  /**
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileName: 'string',
      fileUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListResponseBodyDataFileList extends $dara.Model {
  commissionPolicyName?: string;
  fileType?: string;
  /**
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      commissionPolicyName: 'CommissionPolicyName',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commissionPolicyName: 'string',
      fileType: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 202502
   */
  billMonth?: string;
  fileList?: GetCommissionDetailFileListResponseBodyDataFileList[];
  /**
   * @example
   * 1112332432
   */
  partnerUid?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileList: 'FileList',
      partnerUid: 'PartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileList: { 'type': 'array', 'itemType': GetCommissionDetailFileListResponseBodyDataFileList },
      partnerUid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  amountDiscount?: number;
  /**
   * @example
   * 29137
   */
  amountDue?: number;
  /**
   * @example
   * 2019-01-24 14:20:40
   */
  createdAt?: string;
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  customerClassification?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @example
   * 29137
   */
  discountedPrice?: number;
  /**
   * @example
   * 236414227150922
   */
  orderId?: number;
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
   * 2019-01-24 14:20:40
   */
  paidAt?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 29137
   */
  price?: number;
  /**
   * @example
   * slb
   */
  productCode?: string;
  /**
   * @example
   * slb
   */
  productName?: string;
  /**
   * @example
   * 202502230421
   */
  projectId?: number;
  ramAccountForCustomerManagers?: string[];
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      customerAccount: 'CustomerAccount',
      customerClassification: 'CustomerClassification',
      customerUid: 'CustomerUid',
      deductedAmountByCoupons: 'DeductedAmountByCoupons',
      discountedPrice: 'DiscountedPrice',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      paidAt: 'PaidAt',
      payType: 'PayType',
      price: 'Price',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManagers: 'RamAccountForCustomerManagers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      customerAccount: 'string',
      customerClassification: 'string',
      customerUid: 'number',
      deductedAmountByCoupons: 'number',
      discountedPrice: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderType: 'string',
      paidAt: 'string',
      payType: 'number',
      price: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManagers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ramAccountForCustomerManagers)) {
      $dara.Model.validateArray(this.ramAccountForCustomerManagers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenewalRateListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  customerAdjustedRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  customerOtherBillAmount?: number;
  /**
   * @example
   * 100
   */
  finalCustomerRenewalAmountDue?: number;
  /**
   * @example
   * 0.9
   */
  finalCustomerRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalCustomerRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  finalOtherBillAmount?: number;
  /**
   * @example
   * 100
   */
  finalRenewalAmountDue?: number;
  /**
   * @example
   * 0.9
   */
  finalRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  finalSubPartnerRenewalAmountDue?: number;
  /**
   * @example
   * 0.85
   */
  finalSubPartnerRenewalRate?: number;
  /**
   * @example
   * 100
   */
  finalSubPartnerRenewedAmount?: number;
  /**
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  /**
   * @example
   * P123423453
   */
  masterPid?: string;
  masterPidName?: string;
  /**
   * @example
   * 0.7
   */
  specialCustomerRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialCustomerRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialCustomerRenewedAmount?: number;
  /**
   * @example
   * 0.7
   */
  specialFinalRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialFinalRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialFinalRenewedAmount?: number;
  /**
   * @example
   * 0.8
   */
  specialSubPartnerRenewRatio?: number;
  /**
   * @example
   * 100
   */
  specialSubPartnerRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  specialSubPartnerRenewedAmount?: number;
  /**
   * @example
   * 100
   */
  subPartnerAdjustedRenewalAmountDue?: number;
  /**
   * @example
   * 100
   */
  subPartnerOtherBillAmount?: number;
  static names(): { [key: string]: string } {
    return {
      customerAdjustedRenewalAmountDue: 'CustomerAdjustedRenewalAmountDue',
      customerOtherBillAmount: 'CustomerOtherBillAmount',
      finalCustomerRenewalAmountDue: 'FinalCustomerRenewalAmountDue',
      finalCustomerRenewalRate: 'FinalCustomerRenewalRate',
      finalCustomerRenewedAmount: 'FinalCustomerRenewedAmount',
      finalOtherBillAmount: 'FinalOtherBillAmount',
      finalRenewalAmountDue: 'FinalRenewalAmountDue',
      finalRenewalRate: 'FinalRenewalRate',
      finalRenewedAmount: 'FinalRenewedAmount',
      finalSubPartnerRenewalAmountDue: 'FinalSubPartnerRenewalAmountDue',
      finalSubPartnerRenewalRate: 'FinalSubPartnerRenewalRate',
      finalSubPartnerRenewedAmount: 'FinalSubPartnerRenewedAmount',
      fiscalYearAndQuarter: 'FiscalYearAndQuarter',
      masterPid: 'MasterPid',
      masterPidName: 'MasterPidName',
      specialCustomerRenewRatio: 'SpecialCustomerRenewRatio',
      specialCustomerRenewalAmountDue: 'SpecialCustomerRenewalAmountDue',
      specialCustomerRenewedAmount: 'SpecialCustomerRenewedAmount',
      specialFinalRenewRatio: 'SpecialFinalRenewRatio',
      specialFinalRenewalAmountDue: 'SpecialFinalRenewalAmountDue',
      specialFinalRenewedAmount: 'SpecialFinalRenewedAmount',
      specialSubPartnerRenewRatio: 'SpecialSubPartnerRenewRatio',
      specialSubPartnerRenewalAmountDue: 'SpecialSubPartnerRenewalAmountDue',
      specialSubPartnerRenewedAmount: 'SpecialSubPartnerRenewedAmount',
      subPartnerAdjustedRenewalAmountDue: 'SubPartnerAdjustedRenewalAmountDue',
      subPartnerOtherBillAmount: 'SubPartnerOtherBillAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAdjustedRenewalAmountDue: 'number',
      customerOtherBillAmount: 'number',
      finalCustomerRenewalAmountDue: 'number',
      finalCustomerRenewalRate: 'number',
      finalCustomerRenewedAmount: 'number',
      finalOtherBillAmount: 'number',
      finalRenewalAmountDue: 'number',
      finalRenewalRate: 'number',
      finalRenewedAmount: 'number',
      finalSubPartnerRenewalAmountDue: 'number',
      finalSubPartnerRenewalRate: 'number',
      finalSubPartnerRenewedAmount: 'number',
      fiscalYearAndQuarter: 'string',
      masterPid: 'string',
      masterPidName: 'string',
      specialCustomerRenewRatio: 'number',
      specialCustomerRenewalAmountDue: 'number',
      specialCustomerRenewedAmount: 'number',
      specialFinalRenewRatio: 'number',
      specialFinalRenewalAmountDue: 'number',
      specialFinalRenewedAmount: 'number',
      specialSubPartnerRenewRatio: 'number',
      specialSubPartnerRenewalAmountDue: 'number',
      specialSubPartnerRenewedAmount: 'number',
      subPartnerAdjustedRenewalAmountDue: 'number',
      subPartnerOtherBillAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerListResponseBodySubPartnerList extends $dara.Model {
  address?: string;
  agreementStatus?: string;
  agreementStatusDesc?: string;
  city?: string;
  companyName?: string;
  contact?: string;
  district?: string;
  joinTime?: string;
  masterAccount?: string;
  masterUid?: string;
  pid?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agreementStatus: 'AgreementStatus',
      agreementStatusDesc: 'AgreementStatusDesc',
      city: 'City',
      companyName: 'CompanyName',
      contact: 'Contact',
      district: 'District',
      joinTime: 'JoinTime',
      masterAccount: 'MasterAccount',
      masterUid: 'MasterUid',
      pid: 'Pid',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agreementStatus: 'string',
      agreementStatusDesc: 'string',
      city: 'string',
      companyName: 'string',
      contact: 'string',
      district: 'string',
      joinTime: 'string',
      masterAccount: 'string',
      masterUid: 'string',
      pid: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  amountDiscount?: number;
  /**
   * @example
   * 3750
   */
  amountDue?: number;
  /**
   * @example
   * 2024-07-07 07:52:22
   */
  createdAt?: string;
  /**
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @example
   * 3750
   */
  discountedPrice?: number;
  /**
   * @example
   * 236414227150922
   */
  orderId?: number;
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
   * 2024-07-07 07:52:22
   */
  paidAt?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 3750
   */
  price?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202502233443
   */
  projectId?: number;
  subPartnerName?: string;
  /**
   * @example
   * 1123132
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      deductedAmountByCoupons: 'DeductedAmountByCoupons',
      discountedPrice: 'DiscountedPrice',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      paidAt: 'PaidAt',
      payType: 'PayType',
      price: 'Price',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      deductedAmountByCoupons: 'number',
      discountedPrice: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderType: 'string',
      paidAt: 'string',
      payType: 'number',
      price: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillDetailFileListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetBillDetailFileListResponseBodyData[];
  message?: string;
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 210bc4b416874189683843905d9f9a
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
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetBillDetailFileListResponseBodyData },
      message: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBillDetailFileListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBillDetailFileListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBillDetailFileListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListRequest extends $dara.Model {
  /**
   * @example
   * 202501
   */
  billMonth?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  data?: GetCommissionDetailFileListResponseBodyData;
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
      data: GetCommissionDetailFileListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCommissionDetailFileListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCommissionDetailFileListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListRequest extends $dara.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @example
   * 13595216
   */
  orderId?: number;
  /**
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  orderTypeList?: string[];
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
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 1000
   */
  payAmountBefore?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202502002231
   */
  projectId?: number;
  /**
   * @example
   * 1234532
   */
  ramAccountForCustomerManager?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerUid: 'CustomerUid',
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeList: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManager: 'RamAccountForCustomerManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerUid: 'number',
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeList: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManager: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderTypeList)) {
      $dara.Model.validateArray(this.orderTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListShrinkRequest extends $dara.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @example
   * 13595216
   */
  orderId?: number;
  /**
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  orderTypeListShrink?: string;
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
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 1000
   */
  payAmountBefore?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202502002231
   */
  projectId?: number;
  /**
   * @example
   * 1234532
   */
  ramAccountForCustomerManager?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerUid: 'CustomerUid',
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeListShrink: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManager: 'RamAccountForCustomerManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerUid: 'number',
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManager: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomerOrderListResponseBodyData[];
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2103a30617045934095083027d88c5
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
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCustomerOrderListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerOrderListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerOrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomerOrderListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenewalRateListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025Q4
   */
  fiscalYearAndQuarter?: string;
  static names(): { [key: string]: string } {
    return {
      fiscalYearAndQuarter: 'FiscalYearAndQuarter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fiscalYearAndQuarter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenewalRateListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRenewalRateListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetRenewalRateListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenewalRateListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRenewalRateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRenewalRateListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerListRequest extends $dara.Model {
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
  subPartnerCompanyName?: string;
  /**
   * @example
   * 2323431211
   */
  subPartnerPid?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      subPartnerCompanyName: 'SubPartnerCompanyName',
      subPartnerPid: 'SubPartnerPid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      subPartnerCompanyName: 'string',
      subPartnerPid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerListResponseBody extends $dara.Model {
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  subPartnerList?: GetSubPartnerListResponseBodySubPartnerList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subPartnerList: 'SubPartnerList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      subPartnerList: { 'type': 'array', 'itemType': GetSubPartnerListResponseBodySubPartnerList },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subPartnerList)) {
      $dara.Model.validateArray(this.subPartnerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubPartnerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubPartnerListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListRequest extends $dara.Model {
  /**
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @example
   * 209335720330622
   */
  orderId?: number;
  /**
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  orderTypeList?: string[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 100
   */
  payAmountBefore?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202501101023
   */
  projectId?: number;
  subPartnerName?: string;
  /**
   * @example
   * 123432311
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeList: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeList: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderTypeList)) {
      $dara.Model.validateArray(this.orderTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @example
   * 209335720330622
   */
  orderId?: number;
  /**
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  orderTypeListShrink?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 100
   */
  payAmountBefore?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202501101023
   */
  projectId?: number;
  subPartnerName?: string;
  /**
   * @example
   * 123432311
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeListShrink: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSubPartnerOrderListResponseBodyData[];
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
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
      data: { 'type': 'array', 'itemType': GetSubPartnerOrderListResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubPartnerOrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubPartnerOrderListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 查询账单导出文件
   * 
   * @param request - GetBillDetailFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBillDetailFileListResponse
   */
  async getBillDetailFileListWithOptions(request: GetBillDetailFileListRequest, runtime: $dara.RuntimeOptions): Promise<GetBillDetailFileListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billMonth)) {
      query["BillMonth"] = request.billMonth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBillDetailFileList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBillDetailFileListResponse>(await this.callApi(params, req, runtime), new GetBillDetailFileListResponse({}));
    } else {
      return $dara.cast<GetBillDetailFileListResponse>(await this.execute(params, req, runtime), new GetBillDetailFileListResponse({}));
    }

  }

  /**
   * 查询账单导出文件
   * 
   * @param request - GetBillDetailFileListRequest
   * @returns GetBillDetailFileListResponse
   */
  async getBillDetailFileList(request: GetBillDetailFileListRequest): Promise<GetBillDetailFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBillDetailFileListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴佣金明细
   * 
   * @param request - GetCommissionDetailFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommissionDetailFileListResponse
   */
  async getCommissionDetailFileListWithOptions(request: GetCommissionDetailFileListRequest, runtime: $dara.RuntimeOptions): Promise<GetCommissionDetailFileListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billMonth)) {
      query["BillMonth"] = request.billMonth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommissionDetailFileList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCommissionDetailFileListResponse>(await this.callApi(params, req, runtime), new GetCommissionDetailFileListResponse({}));
    } else {
      return $dara.cast<GetCommissionDetailFileListResponse>(await this.execute(params, req, runtime), new GetCommissionDetailFileListResponse({}));
    }

  }

  /**
   * 查询伙伴佣金明细
   * 
   * @param request - GetCommissionDetailFileListRequest
   * @returns GetCommissionDetailFileListResponse
   */
  async getCommissionDetailFileList(request: GetCommissionDetailFileListRequest): Promise<GetCommissionDetailFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommissionDetailFileListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴拓客订单
   * 
   * @param tmpReq - GetCustomerOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerOrderListResponse
   */
  async getCustomerOrderListWithOptions(tmpReq: GetCustomerOrderListRequest, runtime: $dara.RuntimeOptions): Promise<GetCustomerOrderListResponse> {
    tmpReq.validate();
    let request = new GetCustomerOrderListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderTypeList)) {
      request.orderTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderTypeList, "OrderTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customerAccount)) {
      query["CustomerAccount"] = request.customerAccount;
    }

    if (!$dara.isNull(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

    if (!$dara.isNull(request.orderCreateAfter)) {
      query["OrderCreateAfter"] = request.orderCreateAfter;
    }

    if (!$dara.isNull(request.orderCreateBefore)) {
      query["OrderCreateBefore"] = request.orderCreateBefore;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.orderPayAfter)) {
      query["OrderPayAfter"] = request.orderPayAfter;
    }

    if (!$dara.isNull(request.orderPayBefore)) {
      query["OrderPayBefore"] = request.orderPayBefore;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.orderTypeListShrink)) {
      query["OrderTypeList"] = request.orderTypeListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payAmountAfter)) {
      query["PayAmountAfter"] = request.payAmountAfter;
    }

    if (!$dara.isNull(request.payAmountBefore)) {
      query["PayAmountBefore"] = request.payAmountBefore;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.ramAccountForCustomerManager)) {
      query["RamAccountForCustomerManager"] = request.ramAccountForCustomerManager;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerOrderList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCustomerOrderListResponse>(await this.callApi(params, req, runtime), new GetCustomerOrderListResponse({}));
    } else {
      return $dara.cast<GetCustomerOrderListResponse>(await this.execute(params, req, runtime), new GetCustomerOrderListResponse({}));
    }

  }

  /**
   * 查询伙伴拓客订单
   * 
   * @param request - GetCustomerOrderListRequest
   * @returns GetCustomerOrderListResponse
   */
  async getCustomerOrderList(request: GetCustomerOrderListRequest): Promise<GetCustomerOrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerOrderListWithOptions(request, runtime);
  }

  /**
   * 查询伙伴续费率
   * 
   * @param request - GetRenewalRateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenewalRateListResponse
   */
  async getRenewalRateListWithOptions(request: GetRenewalRateListRequest, runtime: $dara.RuntimeOptions): Promise<GetRenewalRateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fiscalYearAndQuarter)) {
      query["FiscalYearAndQuarter"] = request.fiscalYearAndQuarter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenewalRateList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRenewalRateListResponse>(await this.callApi(params, req, runtime), new GetRenewalRateListResponse({}));
    } else {
      return $dara.cast<GetRenewalRateListResponse>(await this.execute(params, req, runtime), new GetRenewalRateListResponse({}));
    }

  }

  /**
   * 查询伙伴续费率
   * 
   * @param request - GetRenewalRateListRequest
   * @returns GetRenewalRateListResponse
   */
  async getRenewalRateList(request: GetRenewalRateListRequest): Promise<GetRenewalRateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenewalRateListWithOptions(request, runtime);
  }

  /**
   * 查询二级分销商列表
   * 
   * @param request - GetSubPartnerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubPartnerListResponse
   */
  async getSubPartnerListWithOptions(request: GetSubPartnerListRequest, runtime: $dara.RuntimeOptions): Promise<GetSubPartnerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.subPartnerCompanyName)) {
      query["SubPartnerCompanyName"] = request.subPartnerCompanyName;
    }

    if (!$dara.isNull(request.subPartnerPid)) {
      query["SubPartnerPid"] = request.subPartnerPid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubPartnerList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSubPartnerListResponse>(await this.callApi(params, req, runtime), new GetSubPartnerListResponse({}));
    } else {
      return $dara.cast<GetSubPartnerListResponse>(await this.execute(params, req, runtime), new GetSubPartnerListResponse({}));
    }

  }

  /**
   * 查询二级分销商列表
   * 
   * @param request - GetSubPartnerListRequest
   * @returns GetSubPartnerListResponse
   */
  async getSubPartnerList(request: GetSubPartnerListRequest): Promise<GetSubPartnerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubPartnerListWithOptions(request, runtime);
  }

  /**
   * 查询拓渠订单
   * 
   * @param tmpReq - GetSubPartnerOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubPartnerOrderListResponse
   */
  async getSubPartnerOrderListWithOptions(tmpReq: GetSubPartnerOrderListRequest, runtime: $dara.RuntimeOptions): Promise<GetSubPartnerOrderListResponse> {
    tmpReq.validate();
    let request = new GetSubPartnerOrderListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderTypeList)) {
      request.orderTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderTypeList, "OrderTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderCreateAfter)) {
      query["OrderCreateAfter"] = request.orderCreateAfter;
    }

    if (!$dara.isNull(request.orderCreateBefore)) {
      query["OrderCreateBefore"] = request.orderCreateBefore;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.orderPayAfter)) {
      query["OrderPayAfter"] = request.orderPayAfter;
    }

    if (!$dara.isNull(request.orderPayBefore)) {
      query["OrderPayBefore"] = request.orderPayBefore;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.orderTypeListShrink)) {
      query["OrderTypeList"] = request.orderTypeListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payAmountAfter)) {
      query["PayAmountAfter"] = request.payAmountAfter;
    }

    if (!$dara.isNull(request.payAmountBefore)) {
      query["PayAmountBefore"] = request.payAmountBefore;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subPartnerName)) {
      query["SubPartnerName"] = request.subPartnerName;
    }

    if (!$dara.isNull(request.subPartnerUid)) {
      query["SubPartnerUid"] = request.subPartnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubPartnerOrderList",
      version: "2025-02-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSubPartnerOrderListResponse>(await this.callApi(params, req, runtime), new GetSubPartnerOrderListResponse({}));
    } else {
      return $dara.cast<GetSubPartnerOrderListResponse>(await this.execute(params, req, runtime), new GetSubPartnerOrderListResponse({}));
    }

  }

  /**
   * 查询拓渠订单
   * 
   * @param request - GetSubPartnerOrderListRequest
   * @returns GetSubPartnerOrderListResponse
   */
  async getSubPartnerOrderList(request: GetSubPartnerOrderListRequest): Promise<GetSubPartnerOrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubPartnerOrderListWithOptions(request, runtime);
  }

}
