// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue extends $dara.Model {
  /**
   * @remarks
   * The departure city code.
   * 
   * @example
   * BJS
   */
  startCityCode?: string;
  /**
   * @remarks
   * The arrival city code.
   * 
   * @example
   * HGH
   */
  endCityCode?: string;
  /**
   * @remarks
   * The number of carry-on baggage pieces.
   * 
   * @example
   * 1
   */
  carryFreePc?: number;
  /**
   * @remarks
   * The carry-on baggage weight.
   * 
   * @example
   * 20
   */
  carryBagWeight?: number;
  /**
   * @remarks
   * The weight unit of carry-on baggage.
   * 
   * @example
   * KG
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * The carry-on baggage size.
   * 
   * @example
   * 20*40*55CM、三边之和不超过115CM
   */
  carryBagSize?: string;
  /**
   * @remarks
   * Indicates whether the carry-on baggage weight represents the total weight.
   * 
   * @example
   * false
   */
  isAllCarryBagWeight?: boolean;
  /**
   * @remarks
   * The total number of carry-on and checked baggage pieces. This field is for domestic flights only.
   * 
   * @example
   * 1
   */
  totalPcs?: number;
  /**
   * @remarks
   * The total weight of carry-on and checked baggage. This field is for domestic flights only.
   * 
   * @example
   * 20
   */
  totalWeight?: number;
  /**
   * @remarks
   * The unknown flag for carry-on baggage.
   * 
   * @example
   * false
   */
  carryUnknown?: boolean;
  /**
   * @remarks
   * The length of carry-on baggage.
   * 
   * @example
   * 20
   */
  carryLength?: number;
  /**
   * @remarks
   * The width of carry-on baggage.
   * 
   * @example
   * 40
   */
  carryWidth?: number;
  /**
   * @remarks
   * The height of carry-on baggage.
   * 
   * @example
   * 55
   */
  carryHeight?: number;
  /**
   * @remarks
   * The sum of length, width, and height of carry-on baggage.
   * 
   * @example
   * 115
   */
  carrySumOfLengthWidthHeight?: number;
  /**
   * @remarks
   * The number of checked baggage pieces.
   * 
   * @example
   * 1
   */
  freePcs?: number;
  /**
   * @remarks
   * The maximum weight of checked baggage, in pounds or kilograms.
   * 
   * @example
   * 20
   */
  baggageWeight?: number;
  /**
   * @remarks
   * The weight unit of checked baggage.
   * 
   * @example
   * KG
   */
  baggageUnit?: string;
  /**
   * @remarks
   * The checked baggage size.
   * 
   * @example
   * 长宽高之和≤158CM
   */
  baggageSize?: string;
  /**
   * @remarks
   * Indicates whether the checked baggage weight represents the total weight of all pieces.
   * 
   * @example
   * true
   */
  allWeight?: boolean;
  /**
   * @remarks
   * The length of checked baggage.
   * 
   * @example
   * 20
   */
  length?: number;
  /**
   * @remarks
   * The width of checked baggage.
   * 
   * @example
   * 40
   */
  width?: number;
  /**
   * @remarks
   * The height of checked baggage.
   * 
   * @example
   * 55
   */
  height?: number;
  /**
   * @remarks
   * The sum of length, width, and height of checked baggage.
   * 
   * @example
   * 115
   */
  sumOfLengthWidthHeight?: number;
  /**
   * @remarks
   * The unknown baggage flag.
   * 
   * @example
   * false
   */
  unknown?: boolean;
  /**
   * @remarks
   * The Chinese description of the baggage allowance.
   * 
   * @example
   * 行李额中文描述
   */
  cnDesc?: string;
  /**
   * @remarks
   * The English description of the baggage allowance.
   * 
   * @example
   * 行李额英文描述
   */
  enDesc?: string;
  /**
   * @remarks
   * The extended attributes in JSON format. For domestic flights, this field stores multiple text fields with the following field names:
   * - label: label
   * - excessInstruction: excess baggage instructions
   * - babyCar: baby stroller instructions
   * - phoneText: SMS text
   * - defaultRule: fallback rule
   * 
   * @example
   * {"defaultRule":""}
   */
  attribute?: string;
  /**
   * @remarks
   * The baggage price.
   * 
   * @example
   * 20
   */
  baggagePrice?: number;
  /**
   * @remarks
   * The carry-on baggage tips.
   * 
   * @example
   * 随身行李提示信息
   */
  carryOnBaggageTips?: string;
  static names(): { [key: string]: string } {
    return {
      startCityCode: 'start_city_code',
      endCityCode: 'end_city_code',
      carryFreePc: 'carry_free_pc',
      carryBagWeight: 'carry_bag_weight',
      carryOnWeightUnit: 'carry_on_weight_unit',
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
      carryOnWeightUnit: 'string',
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

