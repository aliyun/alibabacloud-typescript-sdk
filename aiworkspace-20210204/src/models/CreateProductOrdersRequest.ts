// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductOrdersRequestProductsInstanceProperties extends $dara.Model {
  /**
   * @remarks
   * The code of the instance property.
   * 
   * @example
   * commodity_type
   */
  code?: string;
  /**
   * @remarks
   * The name of the instance property.
   * 
   * @example
   * Object Storage Service
   */
  name?: string;
  /**
   * @remarks
   * The value of the instance property.
   * 
   * @example
   * oss
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequestProducts extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * - true: Enables auto-renewal.
   * 
   * - false: Disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Currently, only POSTPAY is supported.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is used with PricingCycle. Currently, only a value of 1 is supported.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The list of instance properties.
   * 
   * - DataWorks_share:
   *   [ {
   *   "Code": "region",
   *   "Value": "cn-shanghai"
   *   }
   *   ]
   * 
   * - OSS_share:
   *   [ {
   *   "Code": "commodity_type",
   *   "Value": "oss",
   *   "Name": "Object Storage Service"
   *   },
   *   {
   *   "Code": "ord_time",
   *   "Value": "1:Hour",
   *   "Name": "1 Hour"
   *   }
   *   ]
   * 
   * - PAI_share: None
   * 
   * - MaxCompute_share for accounts in mainland China:
   *   [
   *   {
   *   "Code": "region",
   *   "Value": "cn-hangzhou"
   *   },
   *   {
   *   "Code": "odps_specification_type",
   *   "Value": "OdpsStandard"
   *   },
   *   {
   *   "Code": "ord_time",
   *   "Value": "1:Hour"
   *   }
   *   ]
   * 
   * - MaxCompute_share for accounts outside mainland China:
   *   [
   *   {
   *   "Code": "region",
   *   "Value": "cn-hangzhou"
   *   },
   *   {
   *   "Code": "ord_time",
   *   "Value": "1:Hour"
   *   }
   *   ]
   */
  instanceProperties?: CreateProductOrdersRequestProductsInstanceProperties[];
  /**
   * @remarks
   * The order type. Currently, only BUY is supported.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing cycle. The following values are supported:
   * 
   * - Month: Monthly billing. Only DataWorks_share supports this value.
   * 
   * - Hour: Hourly billing. Only OSS_share and MaxCompute_share support this value.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The product code. The following codes are supported:
   * 
   * - DataWorks_share: The pay-as-you-go DataWorks product.
   * 
   * - MaxCompute_share: The pay-as-you-go MaxCompute product.
   * 
   * - PAI_share: The pay-as-you-go PAI product.
   * 
   * - OSS_share: The pay-as-you-go OSS product.
   * 
   * @example
   * DataWorks_share
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      instanceProperties: 'InstanceProperties',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      instanceProperties: { 'type': 'array', 'itemType': CreateProductOrdersRequestProductsInstanceProperties },
      orderType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceProperties)) {
      $dara.Model.validateArray(this.instanceProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay for all products listed in the Products parameter.
   * 
   * - true: Enables automatic payment.
   * 
   * - false: Disables automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of products to purchase.
   */
  products?: CreateProductOrdersRequestProducts[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      products: { 'type': 'array', 'itemType': CreateProductOrdersRequestProducts },
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

