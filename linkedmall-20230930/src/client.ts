// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddressInfo extends $tea.Model {
  addressDetail?: string;
  addressId?: number;
  divisionCode?: string;
  receiver?: string;
  receiverPhone?: string;
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
  reasonTextId?: number;
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
  categoryId?: number;
  leaf?: boolean;
  level?: number;
  name?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      leaf: 'leaf',
      level: 'level',
      name: 'name',
      parentId: 'parentId',
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

export class ConfirmDisburseCmd extends $tea.Model {
  orderId?: string;
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
  requestId?: string;
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
      cooperationCompanyId: 'CooperationCompanyId',
      cooperationShopId: 'CooperationShopId',
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

export class DeliveryInfo extends $tea.Model {
  displayName?: string;
  id?: string;
  postFee?: number;
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
  maxRefundFee?: number;
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
  divisionCode?: number;
  divisionLevel?: number;
  divisionName?: string;
  parentId?: number;
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
  requestId?: string;
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
  goodName?: string;
  productId?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      goodName: 'goodName',
      productId: 'productId',
      quantity: 'quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      productId: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateCmd extends $tea.Model {
  cpCode?: string;
  disputeId?: number;
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
      disputeId: 'number',
      logisticsNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateResult extends $tea.Model {
  requestId?: string;
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
  desc?: string;
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

export class LogisticsDetail extends $tea.Model {
  ocurrTimeStr?: string;
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

export class LogisticsOrderListResult extends $tea.Model {
  logisticsOrderList?: LogisticsOrderResult[];
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
  dataProvider?: string;
  dataProviderTitle?: string;
  goods?: Good[];
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: LogisticsDetail[];
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
  logisticsStatus?: string;
  number?: string;
  orderId?: string;
  orderLineId?: string;
  orderLineStatus?: string;
  payFee?: number;
  productId?: string;
  productPic?: string;
  productTitle?: string;
  skuId?: string;
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
  requestId?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  canSell?: boolean;
  features?: { [key: string]: any };
  message?: string;
  price?: number;
  productId?: string;
  productPicUrl?: string;
  productTitle?: string;
  purchaserId?: string;
  quantity?: number;
  skuId?: string;
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
  productId?: string;
  purchaserId?: string;
  quantity?: number;
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
  canSell?: boolean;
  deliveryInfoList?: DeliveryInfo[];
  extInfo?: { [key: string]: any };
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
  createDate?: string;
  distributorId?: string;
  logisticsStatus?: string;
  orderAmount?: number;
  orderId?: string;
  orderLineList?: OrderLineResult[];
  orderStatus?: string;
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
  canSell?: boolean;
  categoryChain?: Category[];
  categoryLeafId?: number;
  descPath?: string;
  divisionCode?: string;
  fuzzyQuantity?: string;
  images?: string[];
  picUrl?: string;
  productId?: string;
  productSpecs?: ProductSpec[];
  productStatus?: string;
  productType?: string;
  properties?: ProductProperty[];
  quantity?: number;
  requestId?: string;
  shopId?: string;
  skus?: Sku[];
  soldQuantity?: string;
  taxCode?: string;
  taxRate?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      categoryChain: 'categoryChain',
      categoryLeafId: 'categoryLeafId',
      descPath: 'descPath',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      images: 'images',
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
      canSell: 'boolean',
      categoryChain: { 'type': 'array', 'itemType': Category },
      categoryLeafId: 'number',
      descPath: 'string',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
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
  price?: number;
  productId?: string;
  purchaserId?: string;
  quantity?: number;
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

export class ProductPageResult extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  products?: Product[];
  requestId?: string;
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
  distributorShopId?: string;
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
  canSell?: boolean;
  divisionCode?: string;
  fuzzyQuantity?: string;
  productId?: string;
  productStatus?: string;
  quantity?: number;
  requestId?: string;
  shopId?: string;
  skus?: SkuSaleInfo[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
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
  divisionCode?: string;
  productIds?: string[];
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
  distributorShopId?: string;
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
  key?: string;
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
  value?: string;
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderCreateCmd extends $tea.Model {
  buyerId?: string;
  deliveryAddress?: AddressInfo;
  extInfo?: { [key: string]: any };
  outerPurchaseOrderId?: string;
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
  purchaseOrderId?: string;
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
  buyerId?: string;
  deliveryAddress?: AddressInfo;
  extInfo?: { [key: string]: any };
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
  canSell?: boolean;
  extInfo?: { [key: string]: any };
  message?: string;
  orderList?: OrderRenderResult[];
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
  requestId?: string;
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
  maxRefundFee?: number;
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
  applyReasonTextId?: number;
  applyReasonTips?: string;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureLists?: LeavePictureList[];
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
  disputeId?: string;
  disputeStatus?: number;
  orderLineId?: string;
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
  proofRequired?: boolean;
  reasonTextId?: string;
  reasonTips?: string;
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
  bizClaimType?: number;
  goodsStatus?: number;
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
  bizClaimType?: number;
  maxRefundFeeData?: DistributionMaxRefundFee;
  orderLineId?: string;
  refundReasonList?: RefundReason[];
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
  applyDisputeDesc?: string;
  applyReason?: ApplyReason;
  bizClaimType?: number;
  disputeCreateTime?: string;
  disputeDesc?: string;
  disputeEndTime?: string;
  disputeId?: string;
  disputeStatus?: number;
  orderId?: string;
  orderLineId?: string;
  orderLogisticsStatus?: number;
  refundFee?: number;
  refundFeeData?: RefundFeeData;
  refunderAddress?: string;
  refunderName?: string;
  refunderTel?: string;
  refunderZipCode?: string;
  returnGoodLogisticsStatus?: number;
  sellerAgreeMsg?: string;
  sellerRefuseAgreementMessage?: string;
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
  cooperationShops?: CooperationShop[];
  distributorId?: string;
  endDate?: string;
  purchaserId?: string;
  requestId?: string;
  shopId?: string;
  shopName?: string;
  shopType?: string;
  startDate?: string;
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

export class ShopPageDataResult extends $tea.Model {
  cooperationShops?: CooperationShop[];
  endDate?: string;
  purchaserId?: string;
  shopId?: string;
  shopName?: string;
  shopType?: string;
  startDate?: string;
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
  requestId?: string;
  shopList?: ShopPageDataResult[];
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

export class Sku extends $tea.Model {
  canSell?: boolean;
  divisionCode?: string;
  fuzzyQuantity?: string;
  markPrice?: number;
  picUrl?: string;
  platformPrice?: number;
  price?: number;
  productId?: string;
  quantity?: number;
  shopId?: string;
  skuId?: string;
  skuSpecs?: SkuSpec[];
  skuSpecsCode?: string;
  skuStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'canSell',
      divisionCode: 'divisionCode',
      fuzzyQuantity: 'fuzzyQuantity',
      markPrice: 'markPrice',
      picUrl: 'picUrl',
      platformPrice: 'platformPrice',
      price: 'price',
      productId: 'productId',
      quantity: 'quantity',
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
      canSell: 'boolean',
      divisionCode: 'string',
      fuzzyQuantity: 'string',
      markPrice: 'number',
      picUrl: 'string',
      platformPrice: 'number',
      price: 'number',
      productId: 'string',
      quantity: 'number',
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
  productId?: string;
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
  canSell?: boolean;
  divisionCode?: string;
  fuzzyQuantity?: string;
  markPrice?: number;
  price?: number;
  productId?: string;
  quantity?: number;
  shopId?: string;
  skuId?: string;
  skuStatus?: string;
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
  divisionCode?: string;
  purchaserId?: string;
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
  key?: string;
  keyId?: number;
  value?: string;
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      keyId: 'keyId',
      value: 'value',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
      value: 'string',
      valueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundOrderResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmDisburseResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GoodsShippingNoticeCreateResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PurchaseOrderCreateResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundOrderResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PurchaseOrderStatusResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Shop;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundResult;
  static names(): { [key: string]: string } {
    return {
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
  divisionCode?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: Product;
  static names(): { [key: string]: string } {
    return {
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
  divisionCode?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ProductSaleInfo;
  static names(): { [key: string]: string } {
    return {
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

export class ListLogisticsOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LogisticsOrderListResult;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ShopPageResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ProductSaleInfoListResult;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  pageSize?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ProductPageResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SkuSaleInfoListResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DivisionPageResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderListResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PurchaseOrderRenderResult;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundRenderResult;
  static names(): { [key: string]: string } {
    return {
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

  async cancelRefundOrder(disputeId: string): Promise<CancelRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRefundOrderWithOptions(disputeId, headers, runtime);
  }

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

  async confirmDisburse(request: ConfirmDisburseRequest): Promise<ConfirmDisburseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmDisburseWithOptions(request, headers, runtime);
  }

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

  async createGoodsShippingNotice(request: CreateGoodsShippingNoticeRequest): Promise<CreateGoodsShippingNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGoodsShippingNoticeWithOptions(request, headers, runtime);
  }

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

  async createPurchaseOrder(request: CreatePurchaseOrderRequest): Promise<CreatePurchaseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPurchaseOrderWithOptions(request, headers, runtime);
  }

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

  async createRefundOrder(request: CreateRefundOrderRequest): Promise<CreateRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRefundOrderWithOptions(request, headers, runtime);
  }

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

  async getOrder(orderId: string): Promise<GetOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrderWithOptions(orderId, headers, runtime);
  }

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

  async getPurchaseOrderStatus(purchaseOrderId: string): Promise<GetPurchaseOrderStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaseOrderStatusWithOptions(purchaseOrderId, headers, runtime);
  }

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

  async getPurchaserShop(purchaserId: string): Promise<GetPurchaserShopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaserShopWithOptions(purchaserId, headers, runtime);
  }

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

  async getRefundOrder(disputeId: string): Promise<GetRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRefundOrderWithOptions(disputeId, headers, runtime);
  }

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

  async getSelectionProduct(productId: string, request: GetSelectionProductRequest): Promise<GetSelectionProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductWithOptions(productId, request, headers, runtime);
  }

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

  async getSelectionProductSaleInfo(productId: string, request: GetSelectionProductSaleInfoRequest): Promise<GetSelectionProductSaleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductSaleInfoWithOptions(productId, request, headers, runtime);
  }

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

  async listLogisticsOrders(orderId: string): Promise<ListLogisticsOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogisticsOrdersWithOptions(orderId, headers, runtime);
  }

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

  async listPurchaserShops(request: ListPurchaserShopsRequest): Promise<ListPurchaserShopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPurchaserShopsWithOptions(request, headers, runtime);
  }

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

  async listSelectionProductSaleInfos(request: ListSelectionProductSaleInfosRequest): Promise<ListSelectionProductSaleInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductSaleInfosWithOptions(request, headers, runtime);
  }

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

  async listSelectionProducts(request: ListSelectionProductsRequest): Promise<ListSelectionProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductsWithOptions(request, headers, runtime);
  }

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

  async listSelectionSkuSaleInfos(request: ListSelectionSkuSaleInfosRequest): Promise<ListSelectionSkuSaleInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionSkuSaleInfosWithOptions(request, headers, runtime);
  }

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

  async queryChildDivisionCode(request: QueryChildDivisionCodeRequest): Promise<QueryChildDivisionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryChildDivisionCodeWithOptions(request, headers, runtime);
  }

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

  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrdersWithOptions(request, headers, runtime);
  }

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

  async renderPurchaseOrder(request: RenderPurchaseOrderRequest): Promise<RenderPurchaseOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderPurchaseOrderWithOptions(request, headers, runtime);
  }

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

  async renderRefundOrder(request: RenderRefundOrderRequest): Promise<RenderRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderRefundOrderWithOptions(request, headers, runtime);
  }

}
