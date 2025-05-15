// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValue } from "./CommodityValue";


export class GetServiceEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The estimated price.
   * 
   * @example
   * {\\"cmgj00059839\\": {\\"Result\\": {\\"InquiryType\\": \\"Buy\\", \\"Order\\": {\\"Currency\\": \\"CNY\\", \\"DiscountAmount\\": \\"0.0\\", \\"TradeAmount\\": \\"0.01\\", \\"OriginalAmount\\": \\"0.01\\"}}}}
   */
  commodity?: { [key: string]: CommodityValue };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08ABBB67-39C9-5EE7-98E5-80486F75CE8D
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * { "EcsInstance" : { "Type" : "ALIYUN::ECS::Instance", "Success" : true, "Result" : { "Order" : { "Currency" : "CNY", "RuleIds" : [ "102111101338\\*\\*\\*\\*" ], "DetailInfos" : { "ResourcePriceModel" : [ { "OriginalPrice" : 0, "DiscountPrice" : 0, "SubRules" : { "Rule" : [ ] }, "Resource" : "bandwidth", "TradePrice" : 0 }, { "OriginalPrice" : 0, "DiscountPrice" : 0, "SubRules" : { "Rule" : [ ] }, "Resource" : "image", "TradePrice" : 0 }, { "OriginalPrice" : 0.366666, "DiscountPrice" : 0.249012, "SubRules" : { "Rule" : [ ] }, "Resource" : "instanceType", "TradePrice" : 0.117654 }, { "OriginalPrice" : 0.055555, "DiscountPrice" : 0.037729, "SubRules" : { "Rule" : [ ] }, "Resource" : "systemDisk", "TradePrice" : 0.017826 } ] }, "TradeAmount" : 0.135, "OriginalAmount" : 0.422, "Coupons" : { "Coupon" : [ ] }, "DiscountAmount" : 0.287 }, "OrderSupplement" : { "PriceUnit" : "/Hour", "ChargeType" : "PostPaid", "Quantity" : 1, "PriceType" : "Total" }, "Rules" : { "Rule" : [ { "RuleDescId" : "102111101338\\*\\*\\*\\*", "Name" : "contract discount_multi-billing item discount_3.208750 discount" } ] } } } }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': CommodityValue },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.commodity) {
      $dara.Model.validateMap(this.commodity);
    }
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

