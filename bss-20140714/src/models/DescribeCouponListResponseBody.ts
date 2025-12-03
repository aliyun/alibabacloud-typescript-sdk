// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeCouponListResponseBodyCouponsCouponProductCodes extends $dara.Model {
  productCode?: string[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.productCode)) {
      $dara.Model.validateArray(this.productCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCouponsCouponTradeTypes extends $dara.Model {
  tradeType?: string[];
  static names(): { [key: string]: string } {
    return {
      tradeType: 'TradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tradeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tradeType)) {
      $dara.Model.validateArray(this.tradeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCouponsCoupon extends $dara.Model {
  application?: string;
  balanceAmount?: string;
  couponNumber?: string;
  couponTemplateId?: number;
  creationTime?: string;
  deliveryTime?: string;
  description?: string;
  expiredAmount?: string;
  expiredTime?: string;
  frozenAmount?: string;
  modificationTime?: string;
  priceLimit?: string;
  productCodes?: DescribeCouponListResponseBodyCouponsCouponProductCodes;
  status?: string;
  totalAmount?: string;
  tradeTypes?: DescribeCouponListResponseBodyCouponsCouponTradeTypes;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      balanceAmount: 'BalanceAmount',
      couponNumber: 'CouponNumber',
      couponTemplateId: 'CouponTemplateId',
      creationTime: 'CreationTime',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      expiredAmount: 'ExpiredAmount',
      expiredTime: 'ExpiredTime',
      frozenAmount: 'FrozenAmount',
      modificationTime: 'ModificationTime',
      priceLimit: 'PriceLimit',
      productCodes: 'ProductCodes',
      status: 'Status',
      totalAmount: 'TotalAmount',
      tradeTypes: 'TradeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      balanceAmount: 'string',
      couponNumber: 'string',
      couponTemplateId: 'number',
      creationTime: 'string',
      deliveryTime: 'string',
      description: 'string',
      expiredAmount: 'string',
      expiredTime: 'string',
      frozenAmount: 'string',
      modificationTime: 'string',
      priceLimit: 'string',
      productCodes: DescribeCouponListResponseBodyCouponsCouponProductCodes,
      status: 'string',
      totalAmount: 'string',
      tradeTypes: DescribeCouponListResponseBodyCouponsCouponTradeTypes,
    };
  }

  validate() {
    if(this.productCodes && typeof (this.productCodes as any).validate === 'function') {
      (this.productCodes as any).validate();
    }
    if(this.tradeTypes && typeof (this.tradeTypes as any).validate === 'function') {
      (this.tradeTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCoupons extends $dara.Model {
  coupon?: DescribeCouponListResponseBodyCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeCouponListResponseBodyCouponsCoupon },
    };
  }

  validate() {
    if(Array.isArray(this.coupon)) {
      $dara.Model.validateArray(this.coupon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBody extends $dara.Model {
  coupons?: DescribeCouponListResponseBodyCoupons;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribeCouponListResponseBodyCoupons,
      requestId: 'string',
    };
  }

  validate() {
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

