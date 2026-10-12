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
   * Object Storage Service (OSS)
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
   * Specifies whether to enable auto-renewal. Valid values:
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is disabled.
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
   * The purchase duration. This parameter is used together with PricingCycle. Currently, only 1 is supported.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The list of instance property information.
   * - DataWorks_share:
   * [ {
   * "Code": "region",
   * "Value": "cn-shanghai"
   * }
   * ]
   * - OSS_share:
   * [ {
   * "Code": "commodity_type",
   * "Value": "oss",
   * "Name": "Object Storage Service (OSS)"
   * },
   * {
   * "Code": "ord_time",
   * "Value": "1:Hour",
   * "Name": "1 hour"
   * }
   * ]
   * - PAI_share: None
   * - MaxCompute_share for the Chinese site:
   * [
   * {
   * "Code": "region",
   * "Value": "cn-hangzhou"
   * },
   * {
   * "Code": "odps_specification_type",
   * "Value": "OdpsStandard"
   * },
   * {
   * "Code": "ord_time",
   * "Value": "1:Hour"
   * }
   * ]
   * - MaxCompute_share for the international site:
   * [
   * {
   * "Code": "region",
   * "Value": "cn-hangzhou"
   * },
   * {
   * "Code": "ord_time",
   * "Value": "1:Hour"
   * }
   * ]
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
   * The pricing unit. Valid values:
   * - Month: Monthly pricing. Only DataWorks_share supports this value.
   * - Hour: Hourly pricing. Only OSS_share and MaxCompute_share support this value.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * - DataWorks_share: Pay-as-you-go DataWorks.
   * - MaxCompute_share: Pay-as-you-go MaxCompute.
   * - PAI_share: Pay-as-you-go PAI.
   * - OSS_share: Pay-as-you-go OSS.
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
   * Specifies whether automatic payment is applied to all products specified in the Products parameter. Valid values:
   * - true: automatic payment
   * - false: no automatic payment
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of products to purchase, separated by commas.
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

