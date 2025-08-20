// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribePriceResponseBodyCoupons extends $dara.Model {
  /**
   * @example
   * CanPromFee
   */
  canPromFee?: number;
  couponDesc?: string;
  /**
   * @example
   * CouponName
   */
  couponName?: string;
  /**
   * @example
   * CouponOptionCode
   */
  couponOptionCode?: string;
  /**
   * @example
   * CouponOptionNo
   */
  couponOptionNo?: string;
  /**
   * @example
   * IsSelected
   */
  isSelected?: boolean;
  /**
   * @example
   * PromotionDesc
   */
  promotionDesc?: string;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionCode: 'CouponOptionCode',
      couponOptionNo: 'CouponOptionNo',
      isSelected: 'IsSelected',
      promotionDesc: 'PromotionDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionCode: 'string',
      couponOptionNo: 'string',
      isSelected: 'boolean',
      promotionDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRules extends $dara.Model {
  /**
   * @example
   * alb-xdnghlhvm9vvo1sk54_Accelerator
   */
  name?: string;
  /**
   * @example
   * 1827975
   */
  ruleId?: string;
  /**
   * @example
   * 12
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
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

export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  coupons?: DescribePriceResponseBodyCoupons[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  cuxiao?: boolean;
  /**
   * @example
   * once
   */
  cycle?: string;
  /**
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @example
   * NO_AVAILABLE_PAYMENT_METHOD
   */
  expressionCode?: string;
  /**
   * @example
   * ExpressionMessage
   */
  expressionMessage?: string;
  /**
   * @example
   * 139.41
   */
  infoTitle?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 2099.0
   */
  originalPrice?: number;
  /**
   * @example
   * csas
   */
  productCode?: string;
  promotionRules?: DescribePriceResponseBodyPromotionRules[];
  /**
   * @example
   * 054AF571-C86F-533F-8A7B-F62206FA4367
   */
  requestId?: string;
  /**
   * @example
   * 1320.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      coupons: 'Coupons',
      currency: 'Currency',
      cuxiao: 'Cuxiao',
      cycle: 'Cycle',
      discountPrice: 'DiscountPrice',
      duration: 'Duration',
      expressionCode: 'ExpressionCode',
      expressionMessage: 'ExpressionMessage',
      infoTitle: 'InfoTitle',
      message: 'Message',
      originalPrice: 'OriginalPrice',
      productCode: 'ProductCode',
      promotionRules: 'PromotionRules',
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      coupons: { 'type': 'array', 'itemType': DescribePriceResponseBodyCoupons },
      currency: 'string',
      cuxiao: 'boolean',
      cycle: 'string',
      discountPrice: 'number',
      duration: 'number',
      expressionCode: 'string',
      expressionMessage: 'string',
      infoTitle: 'string',
      message: 'string',
      originalPrice: 'number',
      productCode: 'string',
      promotionRules: { 'type': 'array', 'itemType': DescribePriceResponseBodyPromotionRules },
      requestId: 'string',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coupons)) {
      $dara.Model.validateArray(this.coupons);
    }
    if(Array.isArray(this.promotionRules)) {
      $dara.Model.validateArray(this.promotionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

