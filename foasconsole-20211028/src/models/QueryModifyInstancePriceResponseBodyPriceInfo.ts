// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo } from "./QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo";
import { QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions } from "./QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions";
import { QueryModifyInstancePriceResponseBodyPriceInfoRules } from "./QueryModifyInstancePriceResponseBodyPriceInfoRules";


export class QueryModifyInstancePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @example
   * ORDER.INST_HAS_UNPAID_ORDER
   */
  code?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  depreciateInfo?: QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo;
  /**
   * @example
   * 655.2
   */
  discountAmount?: number;
  isContractActivity?: boolean;
  /**
   * @example
   * 存在未支付订单，请先支付或取消原有订单
   */
  message?: string;
  optionalPromotions?: QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  /**
   * @example
   * 4368
   */
  originalAmount?: number;
  rules?: QueryModifyInstancePriceResponseBodyPriceInfoRules[];
  standDiscountPrice?: string;
  standPrice?: string;
  /**
   * @example
   * 3712.8
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryModifyInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
    }
    if(Array.isArray(this.optionalPromotions)) {
      $dara.Model.validateArray(this.optionalPromotions);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

