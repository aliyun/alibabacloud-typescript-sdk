// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleItemListSubItemsBaggageRuleOfferBaggageInfoMapValue extends $dara.Model {
  /**
   * @example
   * NNG
   */
  startCityCode?: string;
  /**
   * @example
   * SHA
   */
  endCityCode?: string;
  /**
   * @example
   * 1
   */
  carryFreePc?: number;
  /**
   * @example
   * 20
   */
  carryBagWeight?: number;
  /**
   * @example
   * 20*40*55CM、三边之和不超过115CM
   */
  carryBagSize?: string;
  /**
   * @example
   * true
   */
  isAllCarryBagWeight?: boolean;
  /**
   * @example
   * 1
   */
  totalPcs?: number;
  /**
   * @example
   * 20
   */
  totalWeight?: number;
  /**
   * @example
   * true
   */
  carryUnknown?: boolean;
  /**
   * @example
   * 20
   */
  carryLength?: number;
  /**
   * @example
   * 30
   */
  carryWidth?: number;
  /**
   * @example
   * 55
   */
  carryHeight?: number;
  /**
   * @example
   * 115
   */
  carrySumOfLengthWidthHeight?: number;
  /**
   * @example
   * 1
   */
  freePcs?: number;
  /**
   * @example
   * 20
   */
  baggageWeight?: number;
  /**
   * @example
   * KG
   */
  baggageUnit?: string;
  /**
   * @example
   * 长宽高之和≤158CM
   */
  baggageSize?: string;
  /**
   * @example
   * true
   */
  allWeight?: boolean;
  /**
   * @example
   * 20
   */
  length?: number;
  /**
   * @example
   * 30
   */
  width?: number;
  /**
   * @example
   * 55
   */
  height?: number;
  /**
   * @example
   * 115
   */
  sumOfLengthWidthHeight?: number;
  /**
   * @example
   * false
   */
  unknown?: boolean;
  /**
   * @example
   * -
   */
  cnDesc?: string;
  /**
   * @example
   * -
   */
  enDesc?: string;
  /**
   * @example
   * {}
   */
  attribute?: string;
  /**
   * @example
   * 20
   */
  baggagePrice?: number;
  /**
   * @example
   * -
   */
  carryOnBaggageTips?: string;
  static names(): { [key: string]: string } {
    return {
      startCityCode: 'start_city_code',
      endCityCode: 'end_city_code',
      carryFreePc: 'carry_free_pc',
      carryBagWeight: 'carry_bag_weight',
      carryBagSize: 'carry_bag_size',
      isAllCarryBagWeight: 'is_all_carry_bag_weight',
      totalPcs: 'total_pcs',
      totalWeight: 'total_weight',
      carryUnknown: 'carry_unknown',
      carryLength: 'carry_length',
      carryWidth: 'carry_width',
      carryHeight: 'carry_height',
      carrySumOfLengthWidthHeight: 'carry_sum_of_length_width_height',
      freePcs: 'free_pcs',
      baggageWeight: 'baggage_weight',
      baggageUnit: 'baggage_unit',
      baggageSize: 'baggage_size',
      allWeight: 'all_weight',
      length: 'length',
      width: 'width',
      height: 'height',
      sumOfLengthWidthHeight: 'sum_of_length_width_height',
      unknown: 'unknown',
      cnDesc: 'cn_desc',
      enDesc: 'en_desc',
      attribute: 'attribute',
      baggagePrice: 'baggage_price',
      carryOnBaggageTips: 'carry_on_baggage_tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startCityCode: 'string',
      endCityCode: 'string',
      carryFreePc: 'number',
      carryBagWeight: 'number',
      carryBagSize: 'string',
      isAllCarryBagWeight: 'boolean',
      totalPcs: 'number',
      totalWeight: 'number',
      carryUnknown: 'boolean',
      carryLength: 'number',
      carryWidth: 'number',
      carryHeight: 'number',
      carrySumOfLengthWidthHeight: 'number',
      freePcs: 'number',
      baggageWeight: 'number',
      baggageUnit: 'string',
      baggageSize: 'string',
      allWeight: 'boolean',
      length: 'number',
      width: 'number',
      height: 'number',
      sumOfLengthWidthHeight: 'number',
      unknown: 'boolean',
      cnDesc: 'string',
      enDesc: 'string',
      attribute: 'string',
      baggagePrice: 'number',
      carryOnBaggageTips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

