// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductOrdersRequestProductsInstanceProperties extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * commodity_type
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   */
  name?: string;
  /**
   * @remarks
   * The property value.
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
   * Specifies whether to automatically renew the product.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Only POSTPAY is supported.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The purchase duration. You can use this parameter together with pricingCycle. Only 1 is supported.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The properties of the instance.
   * 
   * *   DataWorks_share: [ { "Code": "region", "Value": "cn-shanghai" } ]
   * *   OSS_share: [ { "Code": "commodity_type", "Value": "oss", "Name": "Object Storage Service" }, { "Code": "ord_time", "Value": "1:Hour", "Name": "1 Hour" } ]
   * *   PAI_share: None
   * *   China bid MaxCompute_share: [ { "Code": "region", "Value": "cn-hangzhou" }, { "Code": "odps_specification_type", "Value": "OdpsStandard" }, { "Code": "ord_time", "Value": "1:Hour" } ]
   * *   International bid MaxCompute_share: [ { "Code": "region", "Value": "cn-hangzhou" }, { "Code": "ord_time", "Value": "1:Hour" } ]
   */
  instanceProperties?: CreateProductOrdersRequestProductsInstanceProperties[];
  /**
   * @remarks
   * The type of the order. Only BUY is supported.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   Month: The price is calculated every month. DataWorks_share only supports Month.
   * *   Hour: The price is calculated every hour. OSS_share and MaxCompute_share only support Hour.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   DataWorks_share: pay-as-you-go DataWorks
   * *   MaxCompute_share: pay-as-you-go MaxCompute
   * *   PAI_share: pay-as-you-go PAI.
   * *   OSS_share: pay-as-you-go OSS
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
   * Specifies whether to automatically pay for the provided products.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of products to be purchased. Separate them with commas (,).
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

