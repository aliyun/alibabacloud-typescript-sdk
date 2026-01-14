// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommodityPriceRequestOrdersComponentsProperties extends $dara.Model {
  /**
   * @remarks
   * The code of the attribute of the commodity module.
   * 
   * The information varies based on the commodity module. Examples: **instance** (GA instance) and **ord_time** (subscription duration).
   * 
   * @example
   * instance
   */
  code?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * The information varies based on the commodity module. Examples: **instance_fee** (GA instance fee) and **1:Month** (one-month subscription).
   * 
   * @example
   * instance_fee
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DescribeCommodityPriceRequestOrdersComponents extends $dara.Model {
  /**
   * @remarks
   * The code of the commodity module.
   * 
   * The information varies based on the commodity module. Examples: **instance** (GA instance) and **ord_time** (subscription duration).
   * 
   * @example
   * instance
   */
  componentCode?: string;
  /**
   * @remarks
   * The attributes of commodity modules.
   * 
   * The information varies based on the commodity module.
   */
  properties?: DescribeCommodityPriceRequestOrdersComponentsProperties[];
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      properties: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrdersComponentsProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequestOrders extends $dara.Model {
  /**
   * @remarks
   * The billing method. Set the value to **PREPAY**, which specifies the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values on the China site (aliyun.com):
   * 
   * *   **ga_gapluspre_public_cn**: GA instance.
   * *   **ga_plusbwppre_public_cn**: basic bandwidth plan.
   * 
   * Valid values on the international site (alibabacloud.com):
   * 
   * *   **ga_pluspre_public_intl**: GA instance.
   * *   **ga_bwppreintl_public_intl:** basic bandwidth plan.
   * 
   * @example
   * ga_gapluspre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The information about commodity modules.
   * 
   * The information varies based on the commodity module.
   */
  components?: DescribeCommodityPriceRequestOrdersComponents[];
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   Valid values if you set **PricingCycle** to **Month**: **1** to **9**.
   * *   Valid values if you set **PricingCycle** to **Year**: **1** to **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   **BUY**: purchase order.
   * *   **RENEW**: renewal order.
   * *   **UPGRADE**: upgrade order.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   **Month**
   * *   **Year**
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The number of instances that you want to purchase.
   * 
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      components: 'Components',
      duration: 'Duration',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrdersComponents },
      duration: 'number',
      orderType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity orders.
   * 
   * This parameter is required.
   */
  orders?: DescribeCommodityPriceRequestOrders[];
  /**
   * @remarks
   * The coupon code.
   * 
   * >  This parameter is unavailable on the China site (aliyun.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      orders: 'Orders',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orders: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrders },
      promotionOptionNo: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orders)) {
      $dara.Model.validateArray(this.orders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

