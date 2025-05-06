// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConvertPrepayInstancePriceResponseBodyPriceInfoDepreciateInfo } from "./QueryConvertPrepayInstancePriceResponseBodyPriceInfoDepreciateInfo";
import { QueryConvertPrepayInstancePriceResponseBodyPriceInfoOptionalPromotions } from "./QueryConvertPrepayInstancePriceResponseBodyPriceInfoOptionalPromotions";
import { QueryConvertPrepayInstancePriceResponseBodyPriceInfoRules } from "./QueryConvertPrepayInstancePriceResponseBodyPriceInfoRules";


export class QueryConvertPrepayInstancePriceResponseBodyPriceInfo extends $dara.Model {
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
  depreciateInfo?: QueryConvertPrepayInstancePriceResponseBodyPriceInfoDepreciateInfo;
  /**
   * @example
   * 655.2
   */
  discountAmount?: number;
  /**
   * @example
   * true
   */
  isContractActivity?: boolean;
  /**
   * @example
   * 存在未支付订单，请先支付或取消原有订单
   */
  message?: string;
  optionalPromotions?: QueryConvertPrepayInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  /**
   * @example
   * 4368
   */
  originalAmount?: number;
  rules?: QueryConvertPrepayInstancePriceResponseBodyPriceInfoRules[];
  /**
   * @example
   * 21321
   */
  standDiscountPrice?: string;
  /**
   * @example
   * 32432
   */
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
      depreciateInfo: QueryConvertPrepayInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryConvertPrepayInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryConvertPrepayInstancePriceResponseBodyPriceInfoRules },
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

