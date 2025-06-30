// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue extends $dara.Model {
  startCityCode?: string;
  endCityCode?: string;
  carryFreePc?: number;
  carryBagWeight?: number;
  carryBagSize?: string;
  isAllCarryBagWeight?: boolean;
  totalPcs?: number;
  totalWeight?: number;
  carryUnknown?: boolean;
  carryLength?: number;
  carryWidth?: number;
  carryHeight?: number;
  carrySumOfLengthWidthHeight?: number;
  freePcs?: number;
  baggageWeight?: number;
  baggageUnit?: string;
  baggageSize?: string;
  allWeight?: boolean;
  length?: number;
  width?: number;
  height?: number;
  sumOfLengthWidthHeight?: number;
  unknown?: boolean;
  cnDesc?: string;
  enDesc?: string;
  attribute?: string;
  baggagePrice?: number;
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

