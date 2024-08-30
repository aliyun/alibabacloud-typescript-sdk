// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddressInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 陕西省西安市新城区xxx大厦xx室
   */
  addressDetail?: string;
  /**
   * @example
   * 0
   */
  addressId?: number;
  /**
   * @example
   * 610102
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 任先生
   */
  receiver?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182***5674
   */
  receiverPhone?: string;
  /**
   * @example
   * 61010212
   */
  townDivisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'addressDetail',
      addressId: 'addressId',
      divisionCode: 'divisionCode',
      receiver: 'receiver',
      receiverPhone: 'receiverPhone',
      townDivisionCode: 'townDivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      divisionCode: 'string',
      receiver: 'string',
      receiverPhone: 'string',
      townDivisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyReason extends $tea.Model {
  /**
   * @example
   * 403769
   */
  reasonTextId?: number;
  /**
   * @example
   * 不想要了
   */
  reasonTips?: string;
  static names(): { [key: string]: string } {
    return {
      reasonTextId: 'reasonTextId',
      reasonTips: 'reasonTips',
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

export class Category extends $tea.Model {
  /**
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @example
   * false
   */
  isLeaf?: boolean;
  /**
   * @example
   * 2
   */
  level?: number;
  /**
   * @example
   * 方便面/拉面/挂面/轻食面速食
   */
  name?: string;
  /**
   * @example
   * 50016422
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      isLeaf: 'isLeaf',
      level: 'level',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      isLeaf: 'boolean',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryListQuery extends $tea.Model {
  categoryIds?: number[];
  /**
   * @example
   * 5200001
   */
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'categoryIds',
      parentCategoryId: 'parentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryListResult extends $tea.Model {
  categories?: Category[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': Category },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseCmd extends $tea.Model {
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      purchaseOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResult extends $tea.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CooperationShop extends $tea.Model {
  cooperationCompanyId?: string;
  cooperationShopId?: string;
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationCompanyId: 'cooperationCompanyId',
      cooperationShopId: 'cooperationShopId',
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperationCompanyId: 'string',
      cooperationShopId: 'string',
      shopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliPayUrlRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliPayUrlResult extends $tea.Model {
  accountId?: string;
  memberId?: string;
  zftWithholdSignUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      memberId: 'memberId',
      zftWithholdSignUrl: 'zftWithholdSignUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      memberId: 'string',
      zftWithholdSignUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryInfo extends $tea.Model {
  /**
   * @example
   * 快递 免邮
   */
  displayName?: string;
  /**
   * @example
   * 20
   */
  id?: string;
  /**
   * @example
   * 0
   */
  postFee?: number;
  /**
   * @example
   * -4
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      id: 'id',
      postFee: 'postFee',
      serviceType: 'serviceType',
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

export class DistributionMaxRefundFee extends $tea.Model {
  /**
   * @example
   * 100
   */
  maxRefundFee?: number;
  /**
   * @example
   * 1
   */
  minRefundFee?: number;
  static names(): { [key: string]: string } {
    return {
      maxRefundFee: 'maxRefundFee',
      minRefundFee: 'minRefundFee',
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

export class Division extends $tea.Model {
  /**
   * @example
   * 310000
   */
  divisionCode?: number;
  /**
   * @example
   * 2
   */
  divisionLevel?: number;
  /**
   * @example
   * 上海
   */
  divisionName?: string;
  /**
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @example
   * shang hai
   */
  pinyin?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      divisionLevel: 'divisionLevel',
      divisionName: 'divisionName',
      parentId: 'parentId',
      pinyin: 'pinyin',
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

export class DivisionPageResult extends $tea.Model {
  divisionList?: Division[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionList: 'divisionList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionList: { 'type': 'array', 'itemType': Division },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DivisionQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBill extends $tea.Model {
  billId?: string;
  billPeriod?: string;
  downloadUrl?: string[];
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  shopId?: string;
  shopName?: string;
  startTime?: string;
  totalAmount?: Money;
  static names(): { [key: string]: string } {
    return {
      billId: 'billId',
      billPeriod: 'billPeriod',
      downloadUrl: 'downloadUrl',
      endTime: 'endTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      shopId: 'shopId',
      shopName: 'shopName',
      startTime: 'startTime',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      billPeriod: 'string',
      downloadUrl: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      shopId: 'string',
      shopName: 'string',
      startTime: 'string',
      totalAmount: Money,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBillPageQuery extends $tea.Model {
  asc?: boolean;
  billId?: string;
  billPeriod?: string;
  limit?: number;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  shopId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'asc',
      billId: 'billId',
      billPeriod: 'billPeriod',
      limit: 'limit',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      shopId: 'shopId',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      billId: 'string',
      billPeriod: 'string',
      limit: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      shopId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBillPageResult extends $tea.Model {
  generalBills?: GeneralBill[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      generalBills: 'generalBills',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generalBills: { 'type': 'array', 'itemType': GeneralBill },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Good extends $tea.Model {
  /**
   * @example
   * 儿童学习桌
   */
  goodName?: string;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  skuId?: string;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      goodName: 'goodName',
      productId: 'productId',
      quantity: 'quantity',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      productId: 'string',
      quantity: 'number',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateCmd extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OTHER-其他 POST-中国邮政 EMS-EMS EYB-EMS快递包裹 POSTB-邮政快递包裹 STO-申通快递 YTO-圆通快递 YUNDA-韵达快递 ZJS-宅急送 FEDEX-联邦快递 DBKD-德邦物流 SHQ-华强物流 TN-特能 TAOBAO-淘宝物流 ZTO-中通快递 HTKY-百世快递 TTKDEX-天天快递 SF-顺丰速运 ZTKY-中铁物流 QFKD-全峰快递 JT-极兔物流
   */
  cpCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SF145****4351
   */
  logisticsNo?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'cpCode',
      disputeId: 'disputeId',
      logisticsNo: 'logisticsNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      disputeId: 'string',
      logisticsNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateResult extends $tea.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeavePictureList extends $tea.Model {
  /**
   * @example
   * 退款凭证
   */
  desc?: string;
  /**
   * @example
   * https://
   */
  picture?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      picture: 'picture',
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

export class LimitRule extends $tea.Model {
  beginTime?: number;
  condcase?: string;
  endTime?: number;
  limitNum?: number;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      condcase: 'condcase',
      endTime: 'endTime',
      limitNum: 'limitNum',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      condcase: 'string',
      endTime: 'number',
      limitNum: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsDetail extends $tea.Model {
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  ocurrTimeStr?: string;
  /**
   * @example
   * 已签收
   */
  standerdDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ocurrTimeStr: 'ocurrTimeStr',
      standerdDesc: 'standerdDesc',
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

export class LogisticsInformationData extends $tea.Model {
  logisticsStatus?: string;
  modifiedTime?: string;
  orderId?: string;
  orderLineId?: string;
  outerPurchaseOrderId?: string;
  purchaserId?: string;
  trackingCompanyCode?: string;
  trackingCompanyName?: string;
  trackingNumber?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsStatus: 'logisticsStatus',
      modifiedTime: 'modifiedTime',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      outerPurchaseOrderId: 'outerPurchaseOrderId',
      purchaserId: 'purchaserId',
      trackingCompanyCode: 'trackingCompanyCode',
      trackingCompanyName: 'trackingCompanyName',
      trackingNumber: 'trackingNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsStatus: 'string',
      modifiedTime: 'string',
      orderId: 'string',
      orderLineId: 'string',
      outerPurchaseOrderId: 'string',
      purchaserId: 'string',
      trackingCompanyCode: 'string',
      trackingCompanyName: 'string',
      trackingNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsOrderListResult extends $tea.Model {
  logisticsOrderList?: LogisticsOrderResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsOrderList: 'logisticsOrderList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsOrderList: { 'type': 'array', 'itemType': LogisticsOrderResult },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsOrderResult extends $tea.Model {
  /**
   * @example
   * 菜鸟
   */
  dataProvider?: string;
  /**
   * @example
   * 菜鸟裹裹
   */
  dataProviderTitle?: string;
  goods?: Good[];
  /**
   * @example
   * SF （OTHER-其他 POST-中国邮政 EMS-EMS EYB-EMS快递包裹 POSTB-邮政快递包裹 STO-申通快递 YTO-圆通快递 YUNDA-韵达快递 ZJS-宅急送 FEDEX-联邦快递 DBKD-德邦物流 SHQ-华强物流 TN-特能 TAOBAO-淘宝物流 ZTO-中通快递 HTKY-百世快递 TTKDEX-天天快递 SF-顺丰速运 ZTKY-中铁物流 QFKD-全峰快递 JT-极兔物流）
   */
  logisticsCompanyCode?: string;
  /**
   * @example
   * 顺丰
   */
  logisticsCompanyName?: string;
  logisticsDetailList?: LogisticsDetail[];
  /**
   * @example
   * SF234***2345
   */
  mailNo?: string;
  static names(): { [key: string]: string } {
    return {
      dataProvider: 'dataProvider',
      dataProviderTitle: 'dataProviderTitle',
      goods: 'goods',
      logisticsCompanyCode: 'logisticsCompanyCode',
      logisticsCompanyName: 'logisticsCompanyName',
      logisticsDetailList: 'logisticsDetailList',
      mailNo: 'mailNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProvider: 'string',
      dataProviderTitle: 'string',
      goods: { 'type': 'array', 'itemType': Good },
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: { 'type': 'array', 'itemType': LogisticsDetail },
      mailNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountResult extends $tea.Model {
  /**
   * @example
   * "yue***@newburn.cn"
   */
  accountNo?: string[];
  /**
   * @example
   * 123
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'accountNo',
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: { 'type': 'array', 'itemType': 'string' },
      shopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Money extends $tea.Model {
  amount?: number;
  amountAsString?: string;
  amountString?: string;
  cent?: number;
  currency?: MoneyCurrency;
  currencyCode?: string;
  positive?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      amountAsString: 'amountAsString',
      amountString: 'amountString',
      cent: 'cent',
      currency: 'currency',
      currencyCode: 'currencyCode',
      positive: 'positive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      amountAsString: 'string',
      amountString: 'string',
      cent: 'number',
      currency: MoneyCurrency,
      currencyCode: 'string',
      positive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderLineResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @example
   * 1
   */
  number?: string;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 1
   */
  orderLineStatus?: string;
  /**
   * @example
   * 100
   */
  payFee?: number;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i4/2216003305543/O1CN01bip3Un1qokG0
   */
  productPic?: string;
  /**
   * @example
   * 儿童学习桌
   */
  productTitle?: string;
  /**
   * @example
   * 6600****6737
   */
  skuId?: string;
  /**
   * @example
   * 浅绿色
   */
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsStatus: 'logisticsStatus',
      number: 'number',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      orderLineStatus: 'orderLineStatus',
      payFee: 'payFee',
      productId: 'productId',
      productPic: 'productPic',
      productTitle: 'productTitle',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsStatus: 'string',
      number: 'string',
      orderId: 'string',
      orderLineId: 'string',
      orderLineStatus: 'string',
      payFee: 'number',
      productId: 'string',
      productPic: 'string',
      productTitle: 'string',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResult extends $tea.Model {
  orderList?: OrderResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      orderList: 'orderList',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': OrderResult },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderPageQuery extends $tea.Model {
  orderIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderIdList: 'orderIdList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIdList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      purchaseOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderProductResult extends $tea.Model {
  /**
   * @example
   * true
   */
  canSell?: boolean;
  features?: { [key: string]: any };
  /**
   * @example
   * 库存为0
   */
  message?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i4/2216003305543/O1CN01bip3Un1qokG0
   */
  productPicUrl?: string;
  /**
   * @example
   * 儿童学习桌
   */
  productTitle?: string;
  /**
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 6600****6737
   */
  skuId?: string;
  /**
   * @example
   * 浅绿色
   */
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      features: 'features',
      message: 'message',
      price: 'price',
      productId: 'productId',
      productPicUrl: 'productPicUrl',
      productTitle: 'productTitle',
      purchaserId: 'purchaserId',
      quantity: 'quantity',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      price: 'number',
      productId: 'string',
      productPicUrl: 'string',
      productTitle: 'string',
      purchaserId: 'string',
      quantity: 'number',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRenderProductDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'productId',
      purchaserId: 'purchaserId',
      quantity: 'quantity',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      purchaserId: 'string',
      quantity: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRenderResult extends $tea.Model {
  /**
   * @example
   * true
   */
  canSell?: boolean;
  deliveryInfoList?: DeliveryInfo[];
  extInfo?: { [key: string]: any };
  /**
   * @example
   * 库存为0
   */
  message?: string;
  productList?: OrderProductResult[];
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      deliveryInfoList: 'deliveryInfoList',
      extInfo: 'extInfo',
      message: 'message',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfoList: { 'type': 'array', 'itemType': DeliveryInfo },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      productList: { 'type': 'array', 'itemType': OrderProductResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderResult extends $tea.Model {
  /**
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  createDate?: string;
  /**
   * @example
   * 12****01
   */
  distributorId?: string;
  /**
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @example
   * 100
   */
  orderAmount?: number;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  orderLineList?: OrderLineResult[];
  /**
   * @example
   * 1
   */
  orderStatus?: string;
  /**
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'createDate',
      distributorId: 'distributorId',
      logisticsStatus: 'logisticsStatus',
      orderAmount: 'orderAmount',
      orderId: 'orderId',
      orderLineList: 'orderLineList',
      orderStatus: 'orderStatus',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      distributorId: 'string',
      logisticsStatus: 'string',
      orderAmount: 'number',
      orderId: 'string',
      orderLineList: { 'type': 'array', 'itemType': OrderLineResult },
      orderStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Product extends $tea.Model {
  /**
   * @example
   * Apple/苹果
   */
  brandName?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  categoryChain?: Category[];
  /**
   * @example
   * 201856501
   */
  categoryLeafId?: number;
  /**
   * @example
   * https://img.alicdn.com/descpath/O1CN01wciRDp22AEU14435dsf34
   */
  descPath?: string;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  extendProperties?: ProductExtendProperty[];
  /**
   * @example
   * 100+
   */
  fuzzyQuantity?: string;
  images?: string[];
  limitRules?: LimitRule[];
  /**
   * @example
   * 21000017-4580902812
   */
  lmItemId?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/2214281521988/O1CN01w4vomR1QYYEx6nyr5_!!2214281521988.jpg
   */
  picUrl?: string;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  productSpecs?: ProductSpec[];
  /**
   * @example
   * Online
   */
  productStatus?: string;
  /**
   * @example
   * Normal
   */
  productType?: string;
  properties?: ProductProperty[];
  /**
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  skus?: Sku[];
  /**
   * @example
   * 100+
   */
  soldQuantity?: string;
  /**
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  /**
   * @example
   * 600
   */
  taxRate?: number;
  /**
   * @example
   * 发财树
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'brandName',
      canSell: 'canSell',
      categoryChain: 'categoryChain',
      categoryLeafId: 'categoryLeafId',
      descPath: 'descPath',
      divisionCode: 'divisionCode',
      extendProperties: 'extendProperties',
      fuzzyQuantity: 'fuzzyQuantity',
      images: 'images',
      limitRules: 'limitRules',
      lmItemId: 'lmItemId',
      picUrl: 'picUrl',
      productId: 'productId',
      productSpecs: 'productSpecs',
      productStatus: 'productStatus',
      productType: 'productType',
      properties: 'properties',
      quantity: 'quantity',
      requestId: 'requestId',
      shopId: 'shopId',
      skus: 'skus',
      soldQuantity: 'soldQuantity',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      canSell: 'boolean',
      categoryChain: { 'type': 'array', 'itemType': Category },
      categoryLeafId: 'number',
      descPath: 'string',
      divisionCode: 'string',
      extendProperties: { 'type': 'array', 'itemType': ProductExtendProperty },
      fuzzyQuantity: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      limitRules: { 'type': 'array', 'itemType': LimitRule },
      lmItemId: 'string',
      picUrl: 'string',
      productId: 'string',
      productSpecs: { 'type': 'array', 'itemType': ProductSpec },
      productStatus: 'string',
      productType: 'string',
      properties: { 'type': 'array', 'itemType': ProductProperty },
      quantity: 'number',
      requestId: 'string',
      shopId: 'string',
      skus: { 'type': 'array', 'itemType': Sku },
      soldQuantity: 'string',
      taxCode: 'string',
      taxRate: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductDTO extends $tea.Model {
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6600****6737
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      productId: 'productId',
      purchaserId: 'purchaserId',
      quantity: 'quantity',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      productId: 'string',
      purchaserId: 'string',
      quantity: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductExtendProperty extends $tea.Model {
  /**
   * @example
   * ss_picture_scene
   */
  key?: string;
  /**
   * @example
   * 场景图
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ProductPageResult extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  products?: Product[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      products: 'products',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      products: { 'type': 'array', 'itemType': Product },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductPrice extends $tea.Model {
  /**
   * @example
   * 120
   */
  fundAmountMoney?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmountMoney: 'fundAmountMoney',
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

export class ProductProperty extends $tea.Model {
  /**
   * @example
   * 颜色
   */
  text?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22000009
   */
  distributorShopId?: string;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      distributorShopId: 'distributorShopId',
      divisionCode: 'divisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorShopId: 'string',
      divisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfo extends $tea.Model {
  /**
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @example
   * 有货
   */
  fuzzyQuantity?: string;
  limitRules?: LimitRule[];
  /**
   * @example
   * 21000017-4580902812
   */
  lmItemId?: string;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @example
   * Online
   */
  productStatus?: string;
  /**
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  skus?: SkuSaleInfo[];
  /**
   * @example
   * 发财树
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      limitRules: 'limitRules',
      lmItemId: 'lmItemId',
      productId: 'productId',
      productStatus: 'productStatus',
      quantity: 'quantity',
      requestId: 'requestId',
      shopId: 'shopId',
      skus: 'skus',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      limitRules: { 'type': 'array', 'itemType': LimitRule },
      lmItemId: 'string',
      productId: 'string',
      productStatus: 'string',
      quantity: 'number',
      requestId: 'string',
      shopId: 'string',
      skus: { 'type': 'array', 'itemType': SkuSaleInfo },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoListQuery extends $tea.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22000009
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      productIds: 'productIds',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      productIds: { 'type': 'array', 'itemType': 'string' },
      purchaserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoListResult extends $tea.Model {
  productSaleInfos?: ProductSaleInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productSaleInfos: 'productSaleInfos',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSaleInfos: { 'type': 'array', 'itemType': ProductSaleInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22000009
   */
  distributorShopId?: string;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      distributorShopId: 'distributorShopId',
      divisionCode: 'divisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorShopId: 'string',
      divisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSpec extends $tea.Model {
  /**
   * @example
   * 颜色分类
   */
  key?: string;
  /**
   * @example
   * 1000
   */
  keyId?: number;
  values?: ProductSpecValue[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      keyId: 'keyId',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
      values: { 'type': 'array', 'itemType': ProductSpecValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSpecValue extends $tea.Model {
  /**
   * @example
   * 白色
   */
  value?: string;
  /**
   * @example
   * 秘色
   */
  valueAlias?: string;
  /**
   * @example
   * 1000
   */
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      valueAlias: 'valueAlias',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueAlias: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderCreateCmd extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * buyer2138237
   */
  buyerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryAddress?: AddressInfo;
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * outer123456
   */
  outerPurchaseOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productList?: ProductDTO[];
  static names(): { [key: string]: string } {
    return {
      buyerId: 'buyerId',
      deliveryAddress: 'deliveryAddress',
      extInfo: 'extInfo',
      outerPurchaseOrderId: 'outerPurchaseOrderId',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: AddressInfo,
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outerPurchaseOrderId: 'string',
      productList: { 'type': 'array', 'itemType': ProductDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderCreateResult extends $tea.Model {
  /**
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      purchaseOrderId: 'purchaseOrderId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchaseOrderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderRenderQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1234567
   */
  buyerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryAddress?: AddressInfo;
  /**
   * @example
   * {}
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  productList?: OrderRenderProductDTO[];
  static names(): { [key: string]: string } {
    return {
      buyerId: 'buyerId',
      deliveryAddress: 'deliveryAddress',
      extInfo: 'extInfo',
      productList: 'productList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: AddressInfo,
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      productList: { 'type': 'array', 'itemType': OrderRenderProductDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderRenderResult extends $tea.Model {
  addressList?: AddressInfo[];
  /**
   * @example
   * true
   */
  canSell?: boolean;
  extInfo?: { [key: string]: any };
  /**
   * @example
   * 库存为0
   */
  message?: string;
  orderList?: OrderRenderResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  unsellableOrderList?: OrderRenderResult[];
  static names(): { [key: string]: string } {
    return {
      addressList: 'addressList',
      canSell: 'canSell',
      extInfo: 'extInfo',
      message: 'message',
      orderList: 'orderList',
      requestId: 'requestId',
      unsellableOrderList: 'unsellableOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': AddressInfo },
      canSell: 'boolean',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      orderList: { 'type': 'array', 'itemType': OrderRenderResult },
      requestId: 'string',
      unsellableOrderList: { 'type': 'array', 'itemType': OrderRenderResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderStatusResult extends $tea.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundFeeData extends $tea.Model {
  /**
   * @example
   * 100
   */
  maxRefundFee?: number;
  /**
   * @example
   * 1
   */
  minRefundFee?: number;
  static names(): { [key: string]: string } {
    return {
      maxRefundFee: 'maxRefundFee',
      minRefundFee: 'minRefundFee',
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

export class RefundOrderCmd extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 47821
   */
  applyReasonTextId?: number;
  /**
   * @example
   * 不想要了
   */
  applyReasonTips?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  applyRefundCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  applyRefundFee?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  goodsStatus?: number;
  /**
   * @example
   * 不想要了
   */
  leaveMessage?: string;
  leavePictureLists?: LeavePictureList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'applyReasonTextId',
      applyReasonTips: 'applyReasonTips',
      applyRefundCount: 'applyRefundCount',
      applyRefundFee: 'applyRefundFee',
      bizClaimType: 'bizClaimType',
      goodsStatus: 'goodsStatus',
      leaveMessage: 'leaveMessage',
      leavePictureLists: 'leavePictureLists',
      orderLineId: 'orderLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyReasonTips: 'string',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureLists: { 'type': 'array', 'itemType': LeavePictureList },
      orderLineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResult extends $tea.Model {
  /**
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'disputeId',
      disputeStatus: 'disputeStatus',
      orderLineId: 'orderLineId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'string',
      disputeStatus: 'number',
      orderLineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundReason extends $tea.Model {
  /**
   * @example
   * true
   */
  proofRequired?: boolean;
  /**
   * @example
   * 47683
   */
  reasonTextId?: string;
  /**
   * @example
   * 不想要了
   */
  reasonTips?: string;
  /**
   * @example
   * true
   */
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'proofRequired',
      reasonTextId: 'reasonTextId',
      reasonTips: 'reasonTips',
      refundDescRequired: 'refundDescRequired',
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

export class RefundRenderCmd extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  goodsStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'bizClaimType',
      goodsStatus: 'goodsStatus',
      orderLineId: 'orderLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      goodsStatus: 'number',
      orderLineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundRenderResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  bizClaimType?: number;
  maxRefundFeeData?: DistributionMaxRefundFee;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  refundReasonList?: RefundReason[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'bizClaimType',
      maxRefundFeeData: 'maxRefundFeeData',
      orderLineId: 'orderLineId',
      refundReasonList: 'refundReasonList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      maxRefundFeeData: DistributionMaxRefundFee,
      orderLineId: 'string',
      refundReasonList: { 'type': 'array', 'itemType': RefundReason },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundResult extends $tea.Model {
  /**
   * @example
   * 多拍不想要
   */
  applyDisputeDesc?: string;
  applyReason?: ApplyReason;
  /**
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @example
   * 2023-09-02T00:00:00.000Z
   */
  disputeCreateTime?: string;
  /**
   * @example
   * 多拍不想要
   */
  disputeDesc?: string;
  /**
   * @example
   * 2023-09-02T12:00:00.000Z
   */
  disputeEndTime?: string;
  /**
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 1
   */
  orderLogisticsStatus?: number;
  /**
   * @example
   * 1
   */
  refundFee?: number;
  refundFeeData?: RefundFeeData;
  /**
   * @example
   * 阿里云云谷
   */
  refunderAddress?: string;
  /**
   * @example
   * 赵先生
   */
  refunderName?: string;
  /**
   * @example
   * 182****1334
   */
  refunderTel?: string;
  /**
   * @example
   * 331001
   */
  refunderZipCode?: string;
  /**
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  returnGoodLogisticsStatus?: number;
  /**
   * @example
   * 同意退款
   */
  sellerAgreeMsg?: string;
  /**
   * @example
   * 不同意退款
   */
  sellerRefuseAgreementMessage?: string;
  /**
   * @example
   * 商品没问题，买家举证无效
   */
  sellerRefuseReason?: string;
  static names(): { [key: string]: string } {
    return {
      applyDisputeDesc: 'applyDisputeDesc',
      applyReason: 'applyReason',
      bizClaimType: 'bizClaimType',
      disputeCreateTime: 'disputeCreateTime',
      disputeDesc: 'disputeDesc',
      disputeEndTime: 'disputeEndTime',
      disputeId: 'disputeId',
      disputeStatus: 'disputeStatus',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      orderLogisticsStatus: 'orderLogisticsStatus',
      refundFee: 'refundFee',
      refundFeeData: 'refundFeeData',
      refunderAddress: 'refunderAddress',
      refunderName: 'refunderName',
      refunderTel: 'refunderTel',
      refunderZipCode: 'refunderZipCode',
      requestId: 'requestId',
      returnGoodLogisticsStatus: 'returnGoodLogisticsStatus',
      sellerAgreeMsg: 'sellerAgreeMsg',
      sellerRefuseAgreementMessage: 'sellerRefuseAgreementMessage',
      sellerRefuseReason: 'sellerRefuseReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDisputeDesc: 'string',
      applyReason: ApplyReason,
      bizClaimType: 'number',
      disputeCreateTime: 'string',
      disputeDesc: 'string',
      disputeEndTime: 'string',
      disputeId: 'string',
      disputeStatus: 'number',
      orderId: 'string',
      orderLineId: 'string',
      orderLogisticsStatus: 'number',
      refundFee: 'number',
      refundFeeData: RefundFeeData,
      refunderAddress: 'string',
      refunderName: 'string',
      refunderTel: 'string',
      refunderZipCode: 'string',
      requestId: 'string',
      returnGoodLogisticsStatus: 'number',
      sellerAgreeMsg: 'string',
      sellerRefuseAgreementMessage: 'string',
      sellerRefuseReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Shop extends $tea.Model {
  /**
   * @example
   * 12***01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @example
   * 12****09
   */
  distributorId?: string;
  /**
   * @example
   * 2024-09-09 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * PID56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 48A34399-A72C-1E23-8388-7E63****E927
   */
  requestId?: string;
  /**
   * @example
   * 22****09
   */
  shopId?: string;
  /**
   * @example
   * 儿童分销店铺
   */
  shopName?: string;
  /**
   * @example
   * DistributorQYG
   */
  shopType?: string;
  /**
   * @example
   * 2023-09-09 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationShops: 'cooperationShops',
      distributorId: 'distributorId',
      endDate: 'endDate',
      purchaserId: 'purchaserId',
      requestId: 'requestId',
      shopId: 'shopId',
      shopName: 'shopName',
      shopType: 'shopType',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperationShops: { 'type': 'array', 'itemType': CooperationShop },
      distributorId: 'string',
      endDate: 'string',
      purchaserId: 'string',
      requestId: 'string',
      shopId: 'string',
      shopName: 'string',
      shopType: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopCreateRequest extends $tea.Model {
  /**
   * @example
   * 12344335
   */
  afterSaleDingTalkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 店铺描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12344335
   */
  operatorDingTalkId?: string;
  /**
   * @example
   * 12344335
   */
  preSaleDingTalkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 店铺名称
   */
  shopName?: string;
  static names(): { [key: string]: string } {
    return {
      afterSaleDingTalkId: 'afterSaleDingTalkId',
      description: 'description',
      operatorDingTalkId: 'operatorDingTalkId',
      preSaleDingTalkId: 'preSaleDingTalkId',
      shopName: 'shopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterSaleDingTalkId: 'string',
      description: 'string',
      operatorDingTalkId: 'string',
      preSaleDingTalkId: 'string',
      shopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopCreateResult extends $tea.Model {
  /**
   * @example
   * 123
   */
  shopId?: string;
  /**
   * @example
   * WORKING
   */
  shopStatus?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
      shopStatus: 'shopStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
      shopStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopPageDataResult extends $tea.Model {
  /**
   * @example
   * 12****01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * PID56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 22****09
   */
  shopId?: string;
  /**
   * @example
   * 儿童座椅分销店铺
   */
  shopName?: string;
  /**
   * @example
   * DistributorQYG
   */
  shopType?: string;
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationShops: 'cooperationShops',
      endDate: 'endDate',
      purchaserId: 'purchaserId',
      shopId: 'shopId',
      shopName: 'shopName',
      shopType: 'shopType',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperationShops: { 'type': 'array', 'itemType': CooperationShop },
      endDate: 'string',
      purchaserId: 'string',
      shopId: 'string',
      shopName: 'string',
      shopType: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopPageResult extends $tea.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  shopList?: ShopPageDataResult[];
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      shopList: 'shopList',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      shopList: { 'type': 'array', 'itemType': ShopPageDataResult },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopStatusChangeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  shopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WORKING
   */
  shopStatus?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
      shopStatus: 'shopStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
      shopStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopStatusChangeResult extends $tea.Model {
  /**
   * @example
   * true
   */
  operate?: boolean;
  static names(): { [key: string]: string } {
    return {
      operate: 'operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Sku extends $tea.Model {
  /**
   * @example
   * 6922454329176
   */
  barcode?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @example
   * 有货
   */
  fuzzyQuantity?: string;
  /**
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @example
   * https:////img.alicdn.com/imgextra///img.alicdn.com/imgextra/i2/2216003305543/O1CN010DEQCX1qokFYGRfPE_!!2216003305543.png
   */
  picUrl?: string;
  /**
   * @example
   * 999900
   */
  platformPrice?: number;
  /**
   * @example
   * 19800
   */
  price?: number;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @example
   * 3
   */
  rankValue?: number;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @example
   * 660460842235822081
   */
  skuId?: string;
  skuSpecs?: SkuSpec[];
  /**
   * @example
   * 颜色分类:天蓝色
   */
  skuSpecsCode?: string;
  /**
   * @example
   * Online
   */
  skuStatus?: string;
  /**
   * @example
   * 天蓝色
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      barcode: 'barcode',
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      markPrice: 'markPrice',
      picUrl: 'picUrl',
      platformPrice: 'platformPrice',
      price: 'price',
      productId: 'productId',
      quantity: 'quantity',
      rankValue: 'rankValue',
      shopId: 'shopId',
      skuId: 'skuId',
      skuSpecs: 'skuSpecs',
      skuSpecsCode: 'skuSpecsCode',
      skuStatus: 'skuStatus',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barcode: 'string',
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      markPrice: 'number',
      picUrl: 'string',
      platformPrice: 'number',
      price: 'number',
      productId: 'string',
      quantity: 'number',
      rankValue: 'number',
      shopId: 'string',
      skuId: 'string',
      skuSpecs: { 'type': 'array', 'itemType': SkuSpec },
      skuSpecsCode: 'string',
      skuStatus: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuQueryParam extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 660460842235822081
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'productId',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfo extends $tea.Model {
  /**
   * @example
   * true
   */
  canSell?: boolean;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @example
   * 有货
   */
  fuzzyQuantity?: string;
  /**
   * @example
   * 999900
   */
  markPrice?: number;
  /**
   * @example
   * 19800
   */
  price?: number;
  /**
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @example
   * -1
   */
  quantity?: number;
  /**
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @example
   * 660460842235822081
   */
  skuId?: string;
  /**
   * @example
   * Online
   */
  skuStatus?: string;
  /**
   * @example
   * 天蓝色
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      markPrice: 'markPrice',
      price: 'price',
      productId: 'productId',
      quantity: 'quantity',
      shopId: 'shopId',
      skuId: 'skuId',
      skuStatus: 'skuStatus',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      markPrice: 'number',
      price: 'number',
      productId: 'string',
      quantity: 'number',
      shopId: 'string',
      skuId: 'string',
      skuStatus: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfoListQuery extends $tea.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21000017
   */
  purchaserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  skuQueryParams?: SkuQueryParam[];
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      purchaserId: 'purchaserId',
      skuQueryParams: 'skuQueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      purchaserId: 'string',
      skuQueryParams: { 'type': 'array', 'itemType': SkuQueryParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfoListResult extends $tea.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  skuSaleInfos?: SkuSaleInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      skuSaleInfos: 'skuSaleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skuSaleInfos: { 'type': 'array', 'itemType': SkuSaleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSpec extends $tea.Model {
  /**
   * @example
   * 颜色分类
   */
  key?: string;
  /**
   * @example
   * 1000
   */
  keyId?: number;
  /**
   * @example
   * 天蓝色
   */
  value?: string;
  /**
   * @example
   * 秘色
   */
  valueAlias?: string;
  /**
   * @example
   * 1000
   */
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      keyId: 'keyId',
      value: 'value',
      valueAlias: 'valueAlias',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
      value: 'string',
      valueAlias: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundOrderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundOrderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: ConfirmDisburseCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ConfirmDisburseCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmDisburseResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmDisburseResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGoodsShippingNoticeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: GoodsShippingNoticeCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GoodsShippingNoticeCreateCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGoodsShippingNoticeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GoodsShippingNoticeCreateResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GoodsShippingNoticeCreateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePurchaseOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: PurchaseOrderCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PurchaseOrderCreateCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePurchaseOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurchaseOrderCreateResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PurchaseOrderCreateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRefundOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: RefundOrderCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RefundOrderCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRefundOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundOrderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundOrderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OrderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OrderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurchaseOrderStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurchaseOrderStatusResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PurchaseOrderStatusResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurchaserShopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Shop;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Shop,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRefundOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductRequest extends $tea.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      purchaserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Product;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Product,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductSaleInfoRequest extends $tea.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      purchaserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductSaleInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProductSaleInfo;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ProductSaleInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesRequest extends $tea.Model {
  body?: CategoryListQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CategoryListQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CategoryListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CategoryListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogisticsOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogisticsOrderListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LogisticsOrderListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPurchaserShopsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPurchaserShopsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShopPageResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShopPageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductSaleInfosRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: ProductSaleInfoListQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ProductSaleInfoListQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductSaleInfosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProductSaleInfoListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ProductSaleInfoListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      purchaserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProductPageResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ProductPageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionSkuSaleInfosRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: SkuSaleInfoListQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SkuSaleInfoListQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionSkuSaleInfosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SkuSaleInfoListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SkuSaleInfoListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DivisionQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DivisionQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DivisionPageResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DivisionPageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: OrderPageQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OrderPageQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OrderListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OrderListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderPurchaseOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: PurchaseOrderRenderQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PurchaseOrderRenderQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderPurchaseOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurchaseOrderRenderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PurchaseOrderRenderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderRefundOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: RefundRenderCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RefundRenderCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderRefundOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundRenderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundRenderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitPurchaseOrderRequest extends $tea.Model {
  body?: PurchaseOrderRenderQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PurchaseOrderRenderQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitPurchaseOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurchaseOrderRenderResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PurchaseOrderRenderResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoneyCurrency extends $tea.Model {
  currencyCode?: string;
  defaultFractionDigits?: number;
  displayName?: string;
  numericCode?: number;
  symbol?: string;
  static names(): { [key: string]: string } {
    return {
      currencyCode: 'currencyCode',
      defaultFractionDigits: 'defaultFractionDigits',
      displayName: 'displayName',
      numericCode: 'numericCode',
      symbol: 'symbol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currencyCode: 'string',
      defaultFractionDigits: 'number',
      displayName: 'string',
      numericCode: 'number',
      symbol: 'string',
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

  /**
   * 取消逆向单
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelRefundOrderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${OpenApiUtil.getEncodeParam(disputeId)}/commands/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelRefundOrderResponse>(await this.callApi(params, req, runtime), new CancelRefundOrderResponse({}));
  }

  /**
   * 取消逆向单
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrder(disputeId: string): Promise<CancelRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * 确认收货（订单）
   * 
   * @param request - ConfirmDisburseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmDisburseResponse
   */
  async confirmDisburseWithOptions(request: ConfirmDisburseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConfirmDisburseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmDisburse",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/commands/confirmDisburse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConfirmDisburseResponse>(await this.callApi(params, req, runtime), new ConfirmDisburseResponse({}));
  }

  /**
   * 确认收货（订单）
   * 
   * @param request - ConfirmDisburseRequest
   * @returns ConfirmDisburseResponse
   */
  async confirmDisburse(request: ConfirmDisburseRequest): Promise<ConfirmDisburseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmDisburseWithOptions(request, headers, runtime);
  }

  /**
   * 提交运单信息
   * 
   * @param request - CreateGoodsShippingNoticeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGoodsShippingNoticeResponse
   */
  async createGoodsShippingNoticeWithOptions(request: CreateGoodsShippingNoticeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGoodsShippingNoticeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGoodsShippingNotice",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/command/createGoodsShippingNotice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGoodsShippingNoticeResponse>(await this.callApi(params, req, runtime), new CreateGoodsShippingNoticeResponse({}));
  }

  /**
   * 提交运单信息
   * 
   * @param request - CreateGoodsShippingNoticeRequest
   * @returns CreateGoodsShippingNoticeResponse
   */
  async createGoodsShippingNotice(request: CreateGoodsShippingNoticeRequest): Promise<CreateGoodsShippingNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGoodsShippingNoticeWithOptions(request, headers, runtime);
  }

  /**
   * 创建采购单
   * 
   * @param request - CreatePurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePurchaseOrderResponse
   */
  async createPurchaseOrderWithOptions(request: CreatePurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePurchaseOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePurchaseOrderResponse>(await this.callApi(params, req, runtime), new CreatePurchaseOrderResponse({}));
  }

  /**
   * 创建采购单
   * 
   * @param request - CreatePurchaseOrderRequest
   * @returns CreatePurchaseOrderResponse
   */
  async createPurchaseOrder(request: CreatePurchaseOrderRequest): Promise<CreatePurchaseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPurchaseOrderWithOptions(request, headers, runtime);
  }

  /**
   * 创建逆向单
   * 
   * @param request - CreateRefundOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRefundOrderResponse
   */
  async createRefundOrderWithOptions(request: CreateRefundOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRefundOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRefundOrderResponse>(await this.callApi(params, req, runtime), new CreateRefundOrderResponse({}));
  }

  /**
   * 创建逆向单
   * 
   * @param request - CreateRefundOrderRequest
   * @returns CreateRefundOrderResponse
   */
  async createRefundOrder(request: CreateRefundOrderRequest): Promise<CreateRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRefundOrderWithOptions(request, headers, runtime);
  }

  /**
   * 查询主单详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderResponse
   */
  async getOrderWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOrderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${OpenApiUtil.getEncodeParam(orderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrderResponse>(await this.callApi(params, req, runtime), new GetOrderResponse({}));
  }

  /**
   * 查询主单详情
   * @returns GetOrderResponse
   */
  async getOrder(orderId: string): Promise<GetOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrderWithOptions(orderId, headers, runtime);
  }

  /**
   * 查询采购单状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatusWithOptions(purchaseOrderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPurchaseOrderStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPurchaseOrderStatus",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/${OpenApiUtil.getEncodeParam(purchaseOrderId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPurchaseOrderStatusResponse>(await this.callApi(params, req, runtime), new GetPurchaseOrderStatusResponse({}));
  }

  /**
   * 查询采购单状态
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatus(purchaseOrderId: string): Promise<GetPurchaseOrderStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaseOrderStatusWithOptions(purchaseOrderId, headers, runtime);
  }

  /**
   * 查询分销商店铺
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShopWithOptions(purchaserId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPurchaserShopResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPurchaserShop",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaserShops/${OpenApiUtil.getEncodeParam(purchaserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPurchaserShopResponse>(await this.callApi(params, req, runtime), new GetPurchaserShopResponse({}));
  }

  /**
   * 查询分销商店铺
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShop(purchaserId: string): Promise<GetPurchaserShopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaserShopWithOptions(purchaserId, headers, runtime);
  }

  /**
   * 查询逆向单详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRefundOrderResponse
   */
  async getRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRefundOrderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${OpenApiUtil.getEncodeParam(disputeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRefundOrderResponse>(await this.callApi(params, req, runtime), new GetRefundOrderResponse({}));
  }

  /**
   * 查询逆向单详情
   * @returns GetRefundOrderResponse
   */
  async getRefundOrder(disputeId: string): Promise<GetRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * 查询选品池商品详情
   * 
   * @param request - GetSelectionProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSelectionProductResponse
   */
  async getSelectionProductWithOptions(productId: string, request: GetSelectionProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSelectionProductResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSelectionProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${OpenApiUtil.getEncodeParam(productId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSelectionProductResponse>(await this.callApi(params, req, runtime), new GetSelectionProductResponse({}));
  }

  /**
   * 查询选品池商品详情
   * 
   * @param request - GetSelectionProductRequest
   * @returns GetSelectionProductResponse
   */
  async getSelectionProduct(productId: string, request: GetSelectionProductRequest): Promise<GetSelectionProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductWithOptions(productId, request, headers, runtime);
  }

  /**
   * 查询选品池商品库存
   * 
   * @param request - GetSelectionProductSaleInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSelectionProductSaleInfoResponse
   */
  async getSelectionProductSaleInfoWithOptions(productId: string, request: GetSelectionProductSaleInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSelectionProductSaleInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSelectionProductSaleInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${OpenApiUtil.getEncodeParam(productId)}/saleInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSelectionProductSaleInfoResponse>(await this.callApi(params, req, runtime), new GetSelectionProductSaleInfoResponse({}));
  }

  /**
   * 查询选品池商品库存
   * 
   * @param request - GetSelectionProductSaleInfoRequest
   * @returns GetSelectionProductSaleInfoResponse
   */
  async getSelectionProductSaleInfo(productId: string, request: GetSelectionProductSaleInfoRequest): Promise<GetSelectionProductSaleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductSaleInfoWithOptions(productId, request, headers, runtime);
  }

  /**
   * 查询类目
   * 
   * @param request - ListCategoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoriesResponse
   */
  async listCategoriesWithOptions(request: ListCategoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ListCategories",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/categories/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCategoriesResponse>(await this.callApi(params, req, runtime), new ListCategoriesResponse({}));
  }

  /**
   * 查询类目
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: ListCategoriesRequest): Promise<ListCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoriesWithOptions(request, headers, runtime);
  }

  /**
   * 查询物流信息（订单）
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrdersWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogisticsOrdersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListLogisticsOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${OpenApiUtil.getEncodeParam(orderId)}/logisticsOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogisticsOrdersResponse>(await this.callApi(params, req, runtime), new ListLogisticsOrdersResponse({}));
  }

  /**
   * 查询物流信息（订单）
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrders(orderId: string): Promise<ListLogisticsOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogisticsOrdersWithOptions(orderId, headers, runtime);
  }

  /**
   * 采购方店铺列表查询
   * 
   * @param request - ListPurchaserShopsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPurchaserShopsResponse
   */
  async listPurchaserShopsWithOptions(request: ListPurchaserShopsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPurchaserShopsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPurchaserShops",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaserShops`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPurchaserShopsResponse>(await this.callApi(params, req, runtime), new ListPurchaserShopsResponse({}));
  }

  /**
   * 采购方店铺列表查询
   * 
   * @param request - ListPurchaserShopsRequest
   * @returns ListPurchaserShopsResponse
   */
  async listPurchaserShops(request: ListPurchaserShopsRequest): Promise<ListPurchaserShopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPurchaserShopsWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询选品池商品库存
   * 
   * @param request - ListSelectionProductSaleInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionProductSaleInfosResponse
   */
  async listSelectionProductSaleInfosWithOptions(request: ListSelectionProductSaleInfosRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSelectionProductSaleInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ListSelectionProductSaleInfos",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/saleInfo/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSelectionProductSaleInfosResponse>(await this.callApi(params, req, runtime), new ListSelectionProductSaleInfosResponse({}));
  }

  /**
   * 批量查询选品池商品库存
   * 
   * @param request - ListSelectionProductSaleInfosRequest
   * @returns ListSelectionProductSaleInfosResponse
   */
  async listSelectionProductSaleInfos(request: ListSelectionProductSaleInfosRequest): Promise<ListSelectionProductSaleInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductSaleInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询商品列表
   * 
   * @param request - ListSelectionProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProductsWithOptions(request: ListSelectionProductsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSelectionProductsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSelectionProducts",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSelectionProductsResponse>(await this.callApi(params, req, runtime), new ListSelectionProductsResponse({}));
  }

  /**
   * 查询商品列表
   * 
   * @param request - ListSelectionProductsRequest
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProducts(request: ListSelectionProductsRequest): Promise<ListSelectionProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductsWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询选品池商品SKU库存
   * 
   * @param request - ListSelectionSkuSaleInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionSkuSaleInfosResponse
   */
  async listSelectionSkuSaleInfosWithOptions(request: ListSelectionSkuSaleInfosRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSelectionSkuSaleInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ListSelectionSkuSaleInfos",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/skus/saleInfo/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSelectionSkuSaleInfosResponse>(await this.callApi(params, req, runtime), new ListSelectionSkuSaleInfosResponse({}));
  }

  /**
   * 批量查询选品池商品SKU库存
   * 
   * @param request - ListSelectionSkuSaleInfosRequest
   * @returns ListSelectionSkuSaleInfosResponse
   */
  async listSelectionSkuSaleInfos(request: ListSelectionSkuSaleInfosRequest): Promise<ListSelectionSkuSaleInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionSkuSaleInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询地址divisionCode
   * 
   * @param request - QueryChildDivisionCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChildDivisionCodeResponse
   */
  async queryChildDivisionCodeWithOptions(request: QueryChildDivisionCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryChildDivisionCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryChildDivisionCode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/division/commands/queryChildDivisionCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryChildDivisionCodeResponse>(await this.callApi(params, req, runtime), new QueryChildDivisionCodeResponse({}));
  }

  /**
   * 查询地址divisionCode
   * 
   * @param request - QueryChildDivisionCodeRequest
   * @returns QueryChildDivisionCodeResponse
   */
  async queryChildDivisionCode(request: QueryChildDivisionCodeRequest): Promise<QueryChildDivisionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryChildDivisionCodeWithOptions(request, headers, runtime);
  }

  /**
   * 查询主单列表
   * 
   * @param request - QueryOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrdersResponse
   */
  async queryOrdersWithOptions(request: QueryOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryOrdersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/commands/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryOrdersResponse>(await this.callApi(params, req, runtime), new QueryOrdersResponse({}));
  }

  /**
   * 查询主单列表
   * 
   * @param request - QueryOrdersRequest
   * @returns QueryOrdersResponse
   */
  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrdersWithOptions(request, headers, runtime);
  }

  /**
   * 渲染采购单
   * 
   * @param request - RenderPurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderPurchaseOrderResponse
   */
  async renderPurchaseOrderWithOptions(request: RenderPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenderPurchaseOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "RenderPurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/commands/render`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenderPurchaseOrderResponse>(await this.callApi(params, req, runtime), new RenderPurchaseOrderResponse({}));
  }

  /**
   * 渲染采购单
   * 
   * @param request - RenderPurchaseOrderRequest
   * @returns RenderPurchaseOrderResponse
   */
  async renderPurchaseOrder(request: RenderPurchaseOrderRequest): Promise<RenderPurchaseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderPurchaseOrderWithOptions(request, headers, runtime);
  }

  /**
   * 逆向单渲染
   * 
   * @param request - RenderRefundOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderRefundOrderResponse
   */
  async renderRefundOrderWithOptions(request: RenderRefundOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenderRefundOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "RenderRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/commands/render`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenderRefundOrderResponse>(await this.callApi(params, req, runtime), new RenderRefundOrderResponse({}));
  }

  /**
   * 逆向单渲染
   * 
   * @param request - RenderRefundOrderRequest
   * @returns RenderRefundOrderResponse
   */
  async renderRefundOrder(request: RenderRefundOrderRequest): Promise<RenderRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderRefundOrderWithOptions(request, headers, runtime);
  }

  /**
   * 渲染拆分采购单
   * 
   * @param request - SplitPurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrderWithOptions(request: SplitPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SplitPurchaseOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "SplitPurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/commands/split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SplitPurchaseOrderResponse>(await this.callApi(params, req, runtime), new SplitPurchaseOrderResponse({}));
  }

  /**
   * 渲染拆分采购单
   * 
   * @param request - SplitPurchaseOrderRequest
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrder(request: SplitPurchaseOrderRequest): Promise<SplitPurchaseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitPurchaseOrderWithOptions(request, headers, runtime);
  }

}
