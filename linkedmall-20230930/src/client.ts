// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class MoneyCurrency extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponseBodyProductsCategoryChain extends $dara.Model {
  /**
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  level?: boolean;
  name?: string;
  /**
   * @example
   * 0
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      level: 'level',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      level: 'boolean',
      name: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponseBodyProducts extends $dara.Model {
  bandName?: string;
  canNotSellReason?: string;
  /**
   * @example
   * true
   */
  canSell?: boolean;
  categoryChain?: SearchProductsResponseBodyProductsCategoryChain[];
  credit?: string[];
  /**
   * @example
   * ￥-9998.95 ~ ￥-9977.90
   */
  diffPrice?: string;
  /**
   * @example
   * ￥0.05 ~ ￥21.10
   */
  distributionPrice?: string;
  /**
   * @example
   * -100.00% ~ -99.79%
   */
  distributionPriceRatio?: string;
  /**
   * @example
   * Taobao
   */
  externalPlatformType?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  inGroup?: boolean;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupTime?: string;
  /**
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @example
   * HasInvoice
   */
  invoiceType?: string;
  /**
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  /**
   * @example
   * https://img.alicdn.com/xxx.jpg
   */
  picUrl?: string;
  /**
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformPrice?: string;
  /**
   * @example
   * ￥9999.00 ~ ￥9999.00
   */
  platformReservePrice?: string;
  /**
   * @example
   * xxxxx
   */
  productId?: string;
  productName?: string;
  /**
   * @example
   * xxx
   */
  shopName?: string;
  /**
   * @example
   * 100
   */
  soldQuantity?: string;
  /**
   * @example
   * 3040203000000000000
   */
  taxCode?: string;
  taxRate?: number;
  /**
   * @example
   * JingXiao
   */
  tradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      bandName: 'bandName',
      canNotSellReason: 'canNotSellReason',
      canSell: 'canSell',
      categoryChain: 'categoryChain',
      credit: 'credit',
      diffPrice: 'diffPrice',
      distributionPrice: 'distributionPrice',
      distributionPriceRatio: 'distributionPriceRatio',
      externalPlatformType: 'externalPlatformType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      inGroup: 'inGroup',
      inGroupTime: 'inGroupTime',
      inventoryRiskLevel: 'inventoryRiskLevel',
      invoiceType: 'invoiceType',
      lmItemId: 'lmItemId',
      picUrl: 'picUrl',
      platformPrice: 'platformPrice',
      platformReservePrice: 'platformReservePrice',
      productId: 'productId',
      productName: 'productName',
      shopName: 'shopName',
      soldQuantity: 'soldQuantity',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      tradeMode: 'tradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandName: 'string',
      canNotSellReason: 'string',
      canSell: 'boolean',
      categoryChain: { 'type': 'array', 'itemType': SearchProductsResponseBodyProductsCategoryChain },
      credit: { 'type': 'array', 'itemType': 'string' },
      diffPrice: 'string',
      distributionPrice: 'string',
      distributionPriceRatio: 'string',
      externalPlatformType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inGroup: 'boolean',
      inGroupTime: 'string',
      inventoryRiskLevel: 'string',
      invoiceType: 'string',
      lmItemId: 'string',
      picUrl: 'string',
      platformPrice: 'string',
      platformReservePrice: 'string',
      productId: 'string',
      productName: 'string',
      shopName: 'string',
      soldQuantity: 'string',
      taxCode: 'string',
      taxRate: 'number',
      tradeMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryChain)) {
      $dara.Model.validateArray(this.categoryChain);
    }
    if(Array.isArray(this.credit)) {
      $dara.Model.validateArray(this.credit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyReason extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Category extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryListQuery extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CategoryListResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseCmd extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CooperationShop extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliPayUrlRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliPayUrlResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeProductCommand extends $dara.Model {
  lmShopId?: string;
  products?: DistributionProduct[];
  requestId?: string;
  /**
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  requestUser?: string;
  static names(): { [key: string]: string } {
    return {
      lmShopId: 'lmShopId',
      products: 'products',
      requestId: 'requestId',
      requestTime: 'requestTime',
      requestUser: 'requestUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmShopId: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
      requestTime: 'string',
      requestUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeProductResult extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributionMaxRefundFee extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributionProduct extends $dara.Model {
  categoryChain?: string;
  categoryLeafId?: number;
  categoryLeafName?: string;
  channelCode?: string;
  distributeStatus?: string;
  picUrl?: string;
  productId?: string;
  sellerId?: string;
  shortTitle?: string;
  skus?: DistributionSku[];
  title?: string;
  whiteBackgroundPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      categoryChain: 'categoryChain',
      categoryLeafId: 'categoryLeafId',
      categoryLeafName: 'categoryLeafName',
      channelCode: 'channelCode',
      distributeStatus: 'distributeStatus',
      picUrl: 'picUrl',
      productId: 'productId',
      sellerId: 'sellerId',
      shortTitle: 'shortTitle',
      skus: 'skus',
      title: 'title',
      whiteBackgroundPicUrl: 'whiteBackgroundPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryChain: 'string',
      categoryLeafId: 'number',
      categoryLeafName: 'string',
      channelCode: 'string',
      distributeStatus: 'string',
      picUrl: 'string',
      productId: 'string',
      sellerId: 'string',
      shortTitle: 'string',
      skus: { 'type': 'array', 'itemType': DistributionSku },
      title: 'string',
      whiteBackgroundPicUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skus)) {
      $dara.Model.validateArray(this.skus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributionSku extends $dara.Model {
  aliasTitle?: string;
  barCode?: string;
  creditPeriod?: number;
  dxPrice?: number;
  hasCredit?: boolean;
  hasInvoice?: boolean;
  jxPrice?: number;
  picUrl?: string;
  quantity?: number;
  skuId?: string;
  skuStatus?: string;
  taxCode?: string;
  taxRate?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      aliasTitle: 'aliasTitle',
      barCode: 'barCode',
      creditPeriod: 'creditPeriod',
      dxPrice: 'dxPrice',
      hasCredit: 'hasCredit',
      hasInvoice: 'hasInvoice',
      jxPrice: 'jxPrice',
      picUrl: 'picUrl',
      quantity: 'quantity',
      skuId: 'skuId',
      skuStatus: 'skuStatus',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasTitle: 'string',
      barCode: 'string',
      creditPeriod: 'number',
      dxPrice: 'number',
      hasCredit: 'boolean',
      hasInvoice: 'boolean',
      jxPrice: 'number',
      picUrl: 'string',
      quantity: 'number',
      skuId: 'string',
      skuStatus: 'string',
      taxCode: 'string',
      taxRate: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Division extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DivisionPageResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.divisionList)) {
      $dara.Model.validateArray(this.divisionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DivisionQuery extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBill extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.downloadUrl)) {
      $dara.Model.validateArray(this.downloadUrl);
    }
    if(this.totalAmount && typeof (this.totalAmount as any).validate === 'function') {
      (this.totalAmount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBillPageQuery extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralBillPageResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.generalBills)) {
      $dara.Model.validateArray(this.generalBills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDistributionProductResult extends $dara.Model {
  code?: string;
  message?: string;
  products?: DistributionProduct[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      products: 'products',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Good extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateCmd extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GoodsShippingNoticeCreateResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeavePictureList extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LimitRule extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsDetail extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsInformationData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsOrderListResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.logisticsOrderList)) {
      $dara.Model.validateArray(this.logisticsOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogisticsOrderResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.goods)) {
      $dara.Model.validateArray(this.goods);
    }
    if(Array.isArray(this.logisticsDetailList)) {
      $dara.Model.validateArray(this.logisticsDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.accountNo)) {
      $dara.Model.validateArray(this.accountNo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Money extends $dara.Model {
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

  validate() {
    if(this.currency && typeof (this.currency as any).validate === 'function') {
      (this.currency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderLineResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderPageQuery extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.orderIdList)) {
      $dara.Model.validateArray(this.orderIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderProductResult extends $dara.Model {
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

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRenderProductDTO extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRenderResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.deliveryInfoList)) {
      $dara.Model.validateArray(this.deliveryInfoList);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderResult extends $dara.Model {
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
   * 系统关单
   */
  orderClosedReason?: string;
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
      orderClosedReason: 'orderClosedReason',
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
      orderClosedReason: 'string',
      orderId: 'string',
      orderLineList: { 'type': 'array', 'itemType': OrderLineResult },
      orderStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderLineList)) {
      $dara.Model.validateArray(this.orderLineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Product extends $dara.Model {
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
  inGroup?: boolean;
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
      inGroup: 'inGroup',
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
      inGroup: 'boolean',
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

  validate() {
    if(Array.isArray(this.categoryChain)) {
      $dara.Model.validateArray(this.categoryChain);
    }
    if(Array.isArray(this.extendProperties)) {
      $dara.Model.validateArray(this.extendProperties);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.limitRules)) {
      $dara.Model.validateArray(this.limitRules);
    }
    if(Array.isArray(this.productSpecs)) {
      $dara.Model.validateArray(this.productSpecs);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    if(Array.isArray(this.skus)) {
      $dara.Model.validateArray(this.skus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductDTO extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductExtendProperty extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductPageResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductPrice extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductProperty extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductQuery extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfo extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.limitRules)) {
      $dara.Model.validateArray(this.limitRules);
    }
    if(Array.isArray(this.skus)) {
      $dara.Model.validateArray(this.skus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoListQuery extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoListResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.productSaleInfos)) {
      $dara.Model.validateArray(this.productSaleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSaleInfoQuery extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSpec extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductSpecValue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderCreateCmd extends $dara.Model {
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

  validate() {
    if(this.deliveryAddress && typeof (this.deliveryAddress as any).validate === 'function') {
      (this.deliveryAddress as any).validate();
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderCreateResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderRenderQuery extends $dara.Model {
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

  validate() {
    if(this.deliveryAddress && typeof (this.deliveryAddress as any).validate === 'function') {
      (this.deliveryAddress as any).validate();
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderRenderResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    if(Array.isArray(this.unsellableOrderList)) {
      $dara.Model.validateArray(this.unsellableOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseOrderStatusResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundFeeData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderCmd extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.leavePictureLists)) {
      $dara.Model.validateArray(this.leavePictureLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundReason extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundRenderCmd extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundRenderResult extends $dara.Model {
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

  validate() {
    if(this.maxRefundFeeData && typeof (this.maxRefundFeeData as any).validate === 'function') {
      (this.maxRefundFeeData as any).validate();
    }
    if(Array.isArray(this.refundReasonList)) {
      $dara.Model.validateArray(this.refundReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundResult extends $dara.Model {
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

  validate() {
    if(this.applyReason && typeof (this.applyReason as any).validate === 'function') {
      (this.applyReason as any).validate();
    }
    if(this.refundFeeData && typeof (this.refundFeeData as any).validate === 'function') {
      (this.refundFeeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Shop extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.cooperationShops)) {
      $dara.Model.validateArray(this.cooperationShops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopCreateRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopCreateResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopPageDataResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.cooperationShops)) {
      $dara.Model.validateArray(this.cooperationShops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopPageResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.shopList)) {
      $dara.Model.validateArray(this.shopList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopStatusChangeRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShopStatusChangeResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Sku extends $dara.Model {
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
  discountRetailPrice?: number;
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
  skuAlias?: string;
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
  suggestedRetailPrice?: number;
  /**
   * @example
   * 天蓝色
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      barcode: 'barcode',
      canSell: 'canSell',
      discountRetailPrice: 'discountRetailPrice',
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
      skuAlias: 'skuAlias',
      skuId: 'skuId',
      skuSpecs: 'skuSpecs',
      skuSpecsCode: 'skuSpecsCode',
      skuStatus: 'skuStatus',
      suggestedRetailPrice: 'suggestedRetailPrice',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barcode: 'string',
      canSell: 'boolean',
      discountRetailPrice: 'number',
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
      skuAlias: 'string',
      skuId: 'string',
      skuSpecs: { 'type': 'array', 'itemType': SkuSpec },
      skuSpecsCode: 'string',
      skuStatus: 'string',
      suggestedRetailPrice: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skuSpecs)) {
      $dara.Model.validateArray(this.skuSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuQueryParam extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfoListQuery extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.skuQueryParams)) {
      $dara.Model.validateArray(this.skuQueryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSaleInfoListResult extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.skuSaleInfos)) {
      $dara.Model.validateArray(this.skuSaleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkuSpec extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDistributionCommand extends $dara.Model {
  lmShopId?: string;
  productId?: string;
  requestId?: string;
  /**
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  requestUser?: string;
  static names(): { [key: string]: string } {
    return {
      lmShopId: 'lmShopId',
      productId: 'productId',
      requestId: 'requestId',
      requestTime: 'requestTime',
      requestUser: 'requestUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmShopId: 'string',
      productId: 'string',
      requestId: 'string',
      requestTime: 'string',
      requestUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDistributionResult extends $dara.Model {
  code?: string;
  message?: string;
  products?: DistributionProduct[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      products: 'products',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundOrderResponse extends $dara.Model {
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

export class ConfirmDisburseRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResponse extends $dara.Model {
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

export class CreateGoodsShippingNoticeRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGoodsShippingNoticeResponse extends $dara.Model {
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

export class CreatePurchaseOrderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePurchaseOrderResponse extends $dara.Model {
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

export class CreateRefundOrderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRefundOrderResponse extends $dara.Model {
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

export class GetOrderResponse extends $dara.Model {
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

export class GetPurchaseOrderStatusResponse extends $dara.Model {
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

export class GetPurchaserShopResponse extends $dara.Model {
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

export class GetRefundOrderResponse extends $dara.Model {
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

export class GetSelectionProductRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductResponse extends $dara.Model {
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

export class GetSelectionProductSaleInfoRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSelectionProductSaleInfoResponse extends $dara.Model {
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

export class ListCategoriesRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponse extends $dara.Model {
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

export class ListLogisticsOrdersResponse extends $dara.Model {
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

export class ListPurchaserShopsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPurchaserShopsResponse extends $dara.Model {
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

export class ListSelectionProductSaleInfosRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductSaleInfosResponse extends $dara.Model {
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

export class ListSelectionProductsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionProductsResponse extends $dara.Model {
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

export class ListSelectionSkuSaleInfosRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectionSkuSaleInfosResponse extends $dara.Model {
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

export class QueryChildDivisionCodeRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeResponse extends $dara.Model {
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

export class QueryOrdersRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponse extends $dara.Model {
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

export class RenderPurchaseOrderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderPurchaseOrderResponse extends $dara.Model {
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

export class RenderRefundOrderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderRefundOrderResponse extends $dara.Model {
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

export class SearchProductsRequest extends $dara.Model {
  brandName?: string;
  categoryIds?: string[];
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  createStartTime?: string;
  distributionHighPrice?: number;
  /**
   * @example
   * 244（2.44%）
   */
  distributionHighPriceRatio?: number;
  distributionLowPrice?: number;
  /**
   * @example
   * 133（1.33%）
   */
  distributionLowPriceRatio?: number;
  highMarkPrice?: number;
  highPrice?: number;
  /**
   * @example
   * true
   */
  inGroup?: boolean;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  inGroupStartTime?: string;
  /**
   * @example
   * Low
   */
  inventoryRiskLevel?: string;
  /**
   * @example
   * xxx-xxxxx
   */
  lmItemId?: string;
  lowMarkPrice?: number;
  lowPrice?: number;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyEndTime?: string;
  /**
   * @example
   * 2025-01-02 12:23:34
   * (yyyy-MM-dd HH:mm:ss)
   */
  modifyStartTime?: string;
  orderBy?: string;
  /**
   * @example
   * ASC
   */
  orderDirection?: string;
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
   * Taobao
   */
  platform?: string;
  /**
   * @example
   * xxxxxxx
   */
  productId?: string;
  productName?: string;
  /**
   * @example
   * Sellable
   */
  productStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PIDxxxx
   */
  purchaserId?: string;
  /**
   * @example
   * Rate0
   */
  taxRate?: string;
  /**
   * @example
   * JingXiao
   */
  tradeModeAndCredit?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'brandName',
      categoryIds: 'categoryIds',
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      distributionHighPrice: 'distributionHighPrice',
      distributionHighPriceRatio: 'distributionHighPriceRatio',
      distributionLowPrice: 'distributionLowPrice',
      distributionLowPriceRatio: 'distributionLowPriceRatio',
      highMarkPrice: 'highMarkPrice',
      highPrice: 'highPrice',
      inGroup: 'inGroup',
      inGroupEndTime: 'inGroupEndTime',
      inGroupStartTime: 'inGroupStartTime',
      inventoryRiskLevel: 'inventoryRiskLevel',
      lmItemId: 'lmItemId',
      lowMarkPrice: 'lowMarkPrice',
      lowPrice: 'lowPrice',
      modifyEndTime: 'modifyEndTime',
      modifyStartTime: 'modifyStartTime',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      platform: 'platform',
      productId: 'productId',
      productName: 'productName',
      productStatus: 'productStatus',
      purchaserId: 'purchaserId',
      taxRate: 'taxRate',
      tradeModeAndCredit: 'tradeModeAndCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      createEndTime: 'string',
      createStartTime: 'string',
      distributionHighPrice: 'number',
      distributionHighPriceRatio: 'number',
      distributionLowPrice: 'number',
      distributionLowPriceRatio: 'number',
      highMarkPrice: 'number',
      highPrice: 'number',
      inGroup: 'boolean',
      inGroupEndTime: 'string',
      inGroupStartTime: 'string',
      inventoryRiskLevel: 'string',
      lmItemId: 'string',
      lowMarkPrice: 'number',
      lowPrice: 'number',
      modifyEndTime: 'string',
      modifyStartTime: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productStatus: 'string',
      purchaserId: 'string',
      taxRate: 'string',
      tradeModeAndCredit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryIds)) {
      $dara.Model.validateArray(this.categoryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponseBody extends $dara.Model {
  products?: SearchProductsResponseBodyProducts[];
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      products: 'products',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': SearchProductsResponseBodyProducts },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchProductsResponseBody,
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

export class SelectionGroupAddProductRequest extends $dara.Model {
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
   * PIDxxxxx
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productIds: { 'type': 'array', 'itemType': 'string' },
      purchaserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectionGroupAddProductResponseBody extends $dara.Model {
  productIds?: string[];
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectionGroupAddProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectionGroupAddProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectionGroupAddProductResponseBody,
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

export class SelectionGroupRemoveProductRequest extends $dara.Model {
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
   * PIDxxxxx
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productIds: { 'type': 'array', 'itemType': 'string' },
      purchaserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectionGroupRemoveProductResponseBody extends $dara.Model {
  productIds?: string[];
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectionGroupRemoveProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectionGroupRemoveProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectionGroupRemoveProductResponseBody,
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

export class SplitPurchaseOrderRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitPurchaseOrderResponse extends $dara.Model {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 取消逆向单
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelRefundOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${$dara.URL.percentEncode(disputeId)}/commands/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelRefundOrderResponse>(await this.callApi(params, req, runtime), new CancelRefundOrderResponse({}));
    } else {
      return $dara.cast<CancelRefundOrderResponse>(await this.execute(params, req, runtime), new CancelRefundOrderResponse({}));
    }

  }

  /**
   * 取消逆向单
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrder(disputeId: string): Promise<CancelRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async confirmDisburseWithOptions(request: ConfirmDisburseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ConfirmDisburseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfirmDisburseResponse>(await this.callApi(params, req, runtime), new ConfirmDisburseResponse({}));
    } else {
      return $dara.cast<ConfirmDisburseResponse>(await this.execute(params, req, runtime), new ConfirmDisburseResponse({}));
    }

  }

  /**
   * 确认收货（订单）
   * 
   * @param request - ConfirmDisburseRequest
   * @returns ConfirmDisburseResponse
   */
  async confirmDisburse(request: ConfirmDisburseRequest): Promise<ConfirmDisburseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createGoodsShippingNoticeWithOptions(request: CreateGoodsShippingNoticeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGoodsShippingNoticeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGoodsShippingNoticeResponse>(await this.callApi(params, req, runtime), new CreateGoodsShippingNoticeResponse({}));
    } else {
      return $dara.cast<CreateGoodsShippingNoticeResponse>(await this.execute(params, req, runtime), new CreateGoodsShippingNoticeResponse({}));
    }

  }

  /**
   * 提交运单信息
   * 
   * @param request - CreateGoodsShippingNoticeRequest
   * @returns CreateGoodsShippingNoticeResponse
   */
  async createGoodsShippingNotice(request: CreateGoodsShippingNoticeRequest): Promise<CreateGoodsShippingNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createPurchaseOrderWithOptions(request: CreatePurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePurchaseOrderResponse>(await this.callApi(params, req, runtime), new CreatePurchaseOrderResponse({}));
    } else {
      return $dara.cast<CreatePurchaseOrderResponse>(await this.execute(params, req, runtime), new CreatePurchaseOrderResponse({}));
    }

  }

  /**
   * 创建采购单
   * 
   * @param request - CreatePurchaseOrderRequest
   * @returns CreatePurchaseOrderResponse
   */
  async createPurchaseOrder(request: CreatePurchaseOrderRequest): Promise<CreatePurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createRefundOrderWithOptions(request: CreateRefundOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRefundOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRefundOrderResponse>(await this.callApi(params, req, runtime), new CreateRefundOrderResponse({}));
    } else {
      return $dara.cast<CreateRefundOrderResponse>(await this.execute(params, req, runtime), new CreateRefundOrderResponse({}));
    }

  }

  /**
   * 创建逆向单
   * 
   * @param request - CreateRefundOrderRequest
   * @returns CreateRefundOrderResponse
   */
  async createRefundOrder(request: CreateRefundOrderRequest): Promise<CreateRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getOrderWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${$dara.URL.percentEncode(orderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOrderResponse>(await this.callApi(params, req, runtime), new GetOrderResponse({}));
    } else {
      return $dara.cast<GetOrderResponse>(await this.execute(params, req, runtime), new GetOrderResponse({}));
    }

  }

  /**
   * 查询主单详情
   * @returns GetOrderResponse
   */
  async getOrder(orderId: string): Promise<GetOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getPurchaseOrderStatusWithOptions(purchaseOrderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPurchaseOrderStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurchaseOrderStatus",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/${$dara.URL.percentEncode(purchaseOrderId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPurchaseOrderStatusResponse>(await this.callApi(params, req, runtime), new GetPurchaseOrderStatusResponse({}));
    } else {
      return $dara.cast<GetPurchaseOrderStatusResponse>(await this.execute(params, req, runtime), new GetPurchaseOrderStatusResponse({}));
    }

  }

  /**
   * 查询采购单状态
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatus(purchaseOrderId: string): Promise<GetPurchaseOrderStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getPurchaserShopWithOptions(purchaserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPurchaserShopResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurchaserShop",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaserShops/${$dara.URL.percentEncode(purchaserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPurchaserShopResponse>(await this.callApi(params, req, runtime), new GetPurchaserShopResponse({}));
    } else {
      return $dara.cast<GetPurchaserShopResponse>(await this.execute(params, req, runtime), new GetPurchaserShopResponse({}));
    }

  }

  /**
   * 查询分销商店铺
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShop(purchaserId: string): Promise<GetPurchaserShopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRefundOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${$dara.URL.percentEncode(disputeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRefundOrderResponse>(await this.callApi(params, req, runtime), new GetRefundOrderResponse({}));
    } else {
      return $dara.cast<GetRefundOrderResponse>(await this.execute(params, req, runtime), new GetRefundOrderResponse({}));
    }

  }

  /**
   * 查询逆向单详情
   * @returns GetRefundOrderResponse
   */
  async getRefundOrder(disputeId: string): Promise<GetRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getSelectionProductWithOptions(productId: string, request: GetSelectionProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSelectionProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSelectionProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${$dara.URL.percentEncode(productId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSelectionProductResponse>(await this.callApi(params, req, runtime), new GetSelectionProductResponse({}));
    } else {
      return $dara.cast<GetSelectionProductResponse>(await this.execute(params, req, runtime), new GetSelectionProductResponse({}));
    }

  }

  /**
   * 查询选品池商品详情
   * 
   * @param request - GetSelectionProductRequest
   * @returns GetSelectionProductResponse
   */
  async getSelectionProduct(productId: string, request: GetSelectionProductRequest): Promise<GetSelectionProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getSelectionProductSaleInfoWithOptions(productId: string, request: GetSelectionProductSaleInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSelectionProductSaleInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSelectionProductSaleInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${$dara.URL.percentEncode(productId)}/saleInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSelectionProductSaleInfoResponse>(await this.callApi(params, req, runtime), new GetSelectionProductSaleInfoResponse({}));
    } else {
      return $dara.cast<GetSelectionProductSaleInfoResponse>(await this.execute(params, req, runtime), new GetSelectionProductSaleInfoResponse({}));
    }

  }

  /**
   * 查询选品池商品库存
   * 
   * @param request - GetSelectionProductSaleInfoRequest
   * @returns GetSelectionProductSaleInfoResponse
   */
  async getSelectionProductSaleInfo(productId: string, request: GetSelectionProductSaleInfoRequest): Promise<GetSelectionProductSaleInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listCategoriesWithOptions(request: ListCategoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCategoriesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCategoriesResponse>(await this.callApi(params, req, runtime), new ListCategoriesResponse({}));
    } else {
      return $dara.cast<ListCategoriesResponse>(await this.execute(params, req, runtime), new ListCategoriesResponse({}));
    }

  }

  /**
   * 查询类目
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: ListCategoriesRequest): Promise<ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listLogisticsOrdersWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLogisticsOrdersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogisticsOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${$dara.URL.percentEncode(orderId)}/logisticsOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLogisticsOrdersResponse>(await this.callApi(params, req, runtime), new ListLogisticsOrdersResponse({}));
    } else {
      return $dara.cast<ListLogisticsOrdersResponse>(await this.execute(params, req, runtime), new ListLogisticsOrdersResponse({}));
    }

  }

  /**
   * 查询物流信息（订单）
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrders(orderId: string): Promise<ListLogisticsOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listPurchaserShopsWithOptions(request: ListPurchaserShopsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPurchaserShopsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPurchaserShopsResponse>(await this.callApi(params, req, runtime), new ListPurchaserShopsResponse({}));
    } else {
      return $dara.cast<ListPurchaserShopsResponse>(await this.execute(params, req, runtime), new ListPurchaserShopsResponse({}));
    }

  }

  /**
   * 采购方店铺列表查询
   * 
   * @param request - ListPurchaserShopsRequest
   * @returns ListPurchaserShopsResponse
   */
  async listPurchaserShops(request: ListPurchaserShopsRequest): Promise<ListPurchaserShopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSelectionProductSaleInfosWithOptions(request: ListSelectionProductSaleInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSelectionProductSaleInfosResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSelectionProductSaleInfosResponse>(await this.callApi(params, req, runtime), new ListSelectionProductSaleInfosResponse({}));
    } else {
      return $dara.cast<ListSelectionProductSaleInfosResponse>(await this.execute(params, req, runtime), new ListSelectionProductSaleInfosResponse({}));
    }

  }

  /**
   * 批量查询选品池商品库存
   * 
   * @param request - ListSelectionProductSaleInfosRequest
   * @returns ListSelectionProductSaleInfosResponse
   */
  async listSelectionProductSaleInfos(request: ListSelectionProductSaleInfosRequest): Promise<ListSelectionProductSaleInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSelectionProductsWithOptions(request: ListSelectionProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSelectionProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSelectionProductsResponse>(await this.callApi(params, req, runtime), new ListSelectionProductsResponse({}));
    } else {
      return $dara.cast<ListSelectionProductsResponse>(await this.execute(params, req, runtime), new ListSelectionProductsResponse({}));
    }

  }

  /**
   * 查询商品列表
   * 
   * @param request - ListSelectionProductsRequest
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProducts(request: ListSelectionProductsRequest): Promise<ListSelectionProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSelectionSkuSaleInfosWithOptions(request: ListSelectionSkuSaleInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSelectionSkuSaleInfosResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSelectionSkuSaleInfosResponse>(await this.callApi(params, req, runtime), new ListSelectionSkuSaleInfosResponse({}));
    } else {
      return $dara.cast<ListSelectionSkuSaleInfosResponse>(await this.execute(params, req, runtime), new ListSelectionSkuSaleInfosResponse({}));
    }

  }

  /**
   * 批量查询选品池商品SKU库存
   * 
   * @param request - ListSelectionSkuSaleInfosRequest
   * @returns ListSelectionSkuSaleInfosResponse
   */
  async listSelectionSkuSaleInfos(request: ListSelectionSkuSaleInfosRequest): Promise<ListSelectionSkuSaleInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async queryChildDivisionCodeWithOptions(request: QueryChildDivisionCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryChildDivisionCodeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryChildDivisionCodeResponse>(await this.callApi(params, req, runtime), new QueryChildDivisionCodeResponse({}));
    } else {
      return $dara.cast<QueryChildDivisionCodeResponse>(await this.execute(params, req, runtime), new QueryChildDivisionCodeResponse({}));
    }

  }

  /**
   * 查询地址divisionCode
   * 
   * @param request - QueryChildDivisionCodeRequest
   * @returns QueryChildDivisionCodeResponse
   */
  async queryChildDivisionCode(request: QueryChildDivisionCodeRequest): Promise<QueryChildDivisionCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async queryOrdersWithOptions(request: QueryOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryOrdersResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryOrdersResponse>(await this.callApi(params, req, runtime), new QueryOrdersResponse({}));
    } else {
      return $dara.cast<QueryOrdersResponse>(await this.execute(params, req, runtime), new QueryOrdersResponse({}));
    }

  }

  /**
   * 查询主单列表
   * 
   * @param request - QueryOrdersRequest
   * @returns QueryOrdersResponse
   */
  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async renderPurchaseOrderWithOptions(request: RenderPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RenderPurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenderPurchaseOrderResponse>(await this.callApi(params, req, runtime), new RenderPurchaseOrderResponse({}));
    } else {
      return $dara.cast<RenderPurchaseOrderResponse>(await this.execute(params, req, runtime), new RenderPurchaseOrderResponse({}));
    }

  }

  /**
   * 渲染采购单
   * 
   * @param request - RenderPurchaseOrderRequest
   * @returns RenderPurchaseOrderResponse
   */
  async renderPurchaseOrder(request: RenderPurchaseOrderRequest): Promise<RenderPurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async renderRefundOrderWithOptions(request: RenderRefundOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RenderRefundOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenderRefundOrderResponse>(await this.callApi(params, req, runtime), new RenderRefundOrderResponse({}));
    } else {
      return $dara.cast<RenderRefundOrderResponse>(await this.execute(params, req, runtime), new RenderRefundOrderResponse({}));
    }

  }

  /**
   * 逆向单渲染
   * 
   * @param request - RenderRefundOrderRequest
   * @returns RenderRefundOrderResponse
   */
  async renderRefundOrder(request: RenderRefundOrderRequest): Promise<RenderRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderRefundOrderWithOptions(request, headers, runtime);
  }

  /**
   * 搜索商品
   * 
   * @param request - SearchProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchProductsResponse
   */
  async searchProductsWithOptions(request: SearchProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchProductsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.brandName)) {
      body["brandName"] = request.brandName;
    }

    if (!$dara.isNull(request.categoryIds)) {
      body["categoryIds"] = request.categoryIds;
    }

    if (!$dara.isNull(request.createEndTime)) {
      body["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      body["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.distributionHighPrice)) {
      body["distributionHighPrice"] = request.distributionHighPrice;
    }

    if (!$dara.isNull(request.distributionHighPriceRatio)) {
      body["distributionHighPriceRatio"] = request.distributionHighPriceRatio;
    }

    if (!$dara.isNull(request.distributionLowPrice)) {
      body["distributionLowPrice"] = request.distributionLowPrice;
    }

    if (!$dara.isNull(request.distributionLowPriceRatio)) {
      body["distributionLowPriceRatio"] = request.distributionLowPriceRatio;
    }

    if (!$dara.isNull(request.highMarkPrice)) {
      body["highMarkPrice"] = request.highMarkPrice;
    }

    if (!$dara.isNull(request.highPrice)) {
      body["highPrice"] = request.highPrice;
    }

    if (!$dara.isNull(request.inGroup)) {
      body["inGroup"] = request.inGroup;
    }

    if (!$dara.isNull(request.inGroupEndTime)) {
      body["inGroupEndTime"] = request.inGroupEndTime;
    }

    if (!$dara.isNull(request.inGroupStartTime)) {
      body["inGroupStartTime"] = request.inGroupStartTime;
    }

    if (!$dara.isNull(request.inventoryRiskLevel)) {
      body["inventoryRiskLevel"] = request.inventoryRiskLevel;
    }

    if (!$dara.isNull(request.lmItemId)) {
      body["lmItemId"] = request.lmItemId;
    }

    if (!$dara.isNull(request.lowMarkPrice)) {
      body["lowMarkPrice"] = request.lowMarkPrice;
    }

    if (!$dara.isNull(request.lowPrice)) {
      body["lowPrice"] = request.lowPrice;
    }

    if (!$dara.isNull(request.modifyEndTime)) {
      body["modifyEndTime"] = request.modifyEndTime;
    }

    if (!$dara.isNull(request.modifyStartTime)) {
      body["modifyStartTime"] = request.modifyStartTime;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.productStatus)) {
      body["productStatus"] = request.productStatus;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    if (!$dara.isNull(request.taxRate)) {
      body["taxRate"] = request.taxRate;
    }

    if (!$dara.isNull(request.tradeModeAndCredit)) {
      body["tradeModeAndCredit"] = request.tradeModeAndCredit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchProducts",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/searchProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SearchProductsResponse>(await this.callApi(params, req, runtime), new SearchProductsResponse({}));
    } else {
      return $dara.cast<SearchProductsResponse>(await this.execute(params, req, runtime), new SearchProductsResponse({}));
    }

  }

  /**
   * 搜索商品
   * 
   * @param request - SearchProductsRequest
   * @returns SearchProductsResponse
   */
  async searchProducts(request: SearchProductsRequest): Promise<SearchProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchProductsWithOptions(request, headers, runtime);
  }

  /**
   * 入库操作
   * 
   * @param request - SelectionGroupAddProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectionGroupAddProductResponse
   */
  async selectionGroupAddProductWithOptions(request: SelectionGroupAddProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SelectionGroupAddProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productIds)) {
      body["productIds"] = request.productIds;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectionGroupAddProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/addProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SelectionGroupAddProductResponse>(await this.callApi(params, req, runtime), new SelectionGroupAddProductResponse({}));
    } else {
      return $dara.cast<SelectionGroupAddProductResponse>(await this.execute(params, req, runtime), new SelectionGroupAddProductResponse({}));
    }

  }

  /**
   * 入库操作
   * 
   * @param request - SelectionGroupAddProductRequest
   * @returns SelectionGroupAddProductResponse
   */
  async selectionGroupAddProduct(request: SelectionGroupAddProductRequest): Promise<SelectionGroupAddProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectionGroupAddProductWithOptions(request, headers, runtime);
  }

  /**
   * 出库操作
   * 
   * @param request - SelectionGroupRemoveProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectionGroupRemoveProductResponse
   */
  async selectionGroupRemoveProductWithOptions(request: SelectionGroupRemoveProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SelectionGroupRemoveProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productIds)) {
      body["productIds"] = request.productIds;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectionGroupRemoveProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/removeProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SelectionGroupRemoveProductResponse>(await this.callApi(params, req, runtime), new SelectionGroupRemoveProductResponse({}));
    } else {
      return $dara.cast<SelectionGroupRemoveProductResponse>(await this.execute(params, req, runtime), new SelectionGroupRemoveProductResponse({}));
    }

  }

  /**
   * 出库操作
   * 
   * @param request - SelectionGroupRemoveProductRequest
   * @returns SelectionGroupRemoveProductResponse
   */
  async selectionGroupRemoveProduct(request: SelectionGroupRemoveProductRequest): Promise<SelectionGroupRemoveProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectionGroupRemoveProductWithOptions(request, headers, runtime);
  }

  /**
   * 渲染拆分采购单
   * 
   * @param request - SplitPurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrderWithOptions(request: SplitPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SplitPurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SplitPurchaseOrderResponse>(await this.callApi(params, req, runtime), new SplitPurchaseOrderResponse({}));
    } else {
      return $dara.cast<SplitPurchaseOrderResponse>(await this.execute(params, req, runtime), new SplitPurchaseOrderResponse({}));
    }

  }

  /**
   * 渲染拆分采购单
   * 
   * @param request - SplitPurchaseOrderRequest
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrder(request: SplitPurchaseOrderRequest): Promise<SplitPurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitPurchaseOrderWithOptions(request, headers, runtime);
  }

}
