// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrderResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodySupplierTelephones extends $dara.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.telephone)) {
      $dara.Model.validateArray(this.telephone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  components?: { [key: string]: any };
  /**
   * @example
   * 0.0
   */
  couponPrice?: number;
  /**
   * @example
   * 1531191564000
   */
  createdOn?: number;
  instanceIds?: DescribeOrderResponseBodyInstanceIds;
  /**
   * @example
   * 202211111111111
   */
  orderId?: number;
  /**
   * @example
   * NORMAL
   */
  orderStatus?: string;
  /**
   * @example
   * NEW
   */
  orderType?: string;
  /**
   * @example
   * 10.0
   */
  originalPrice?: number;
  /**
   * @example
   * 1531191675000
   */
  paidOn?: number;
  /**
   * @example
   * PAID
   */
  payStatus?: string;
  /**
   * @example
   * 0.0
   */
  paymentPrice?: number;
  /**
   * @example
   * MONTH
   */
  periodType?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  supplierCompanyName?: string;
  supplierTelephones?: DescribeOrderResponseBodySupplierTelephones;
  /**
   * @example
   * 0.0
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      supplierCompanyName: 'SupplierCompanyName',
      supplierTelephones: 'SupplierTelephones',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: DescribeOrderResponseBodyInstanceIds,
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      supplierCompanyName: 'string',
      supplierTelephones: DescribeOrderResponseBodySupplierTelephones,
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.supplierTelephones && typeof (this.supplierTelephones as any).validate === 'function') {
      (this.supplierTelephones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

