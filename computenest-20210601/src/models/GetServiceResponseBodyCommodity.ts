// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodityCssMetadata } from "./GetServiceResponseBodyCommodityCssMetadata";
import { GetServiceResponseBodyCommodityMarketplaceMetadata } from "./GetServiceResponseBodyCommodityMarketplaceMetadata";
import { GetServiceResponseBodyCommoditySpecifications } from "./GetServiceResponseBodyCommoditySpecifications";


export class GetServiceResponseBodyCommodity extends $dara.Model {
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   **PREPAY** (default): subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The deploy page.
   * 
   * @example
   * Order： Order page
   * Detail： Detail page
   */
  deployPage?: string;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The order time.
   */
  orderTime?: { [key: string]: string[] };
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * {
   *     "Enabled":false    "PublicAccessUrl":"https://example.com"
   * }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The specification details of the service in Alibaba Cloud Marketplace.
   */
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      cssMetadata: 'CssMetadata',
      deployPage: 'DeployPage',
      marketplaceMetadata: 'MarketplaceMetadata',
      orderTime: 'OrderTime',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      deployPage: 'string',
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      orderTime: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  validate() {
    if(this.cssMetadata && typeof (this.cssMetadata as any).validate === 'function') {
      (this.cssMetadata as any).validate();
    }
    if(this.marketplaceMetadata && typeof (this.marketplaceMetadata as any).validate === 'function') {
      (this.marketplaceMetadata as any).validate();
    }
    if(this.orderTime) {
      $dara.Model.validateMap(this.orderTime);
    }
    if(Array.isArray(this.specifications)) {
      $dara.Model.validateArray(this.specifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

