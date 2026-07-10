// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleGroupItemSubItemsBaggageRuleBaggageInfoMapValue extends $dara.Model {
  carryFreepc?: number;
  carryBagWeight?: number;
  carryBagSize?: string;
  isAllCarryBagWeight?: boolean;
  airline?: string;
  startAirport?: string;
  endAirport?: string;
  startCityCode?: string;
  endCityCode?: string;
  freePcs?: number;
  baggageWeight?: number;
  baggageUnit?: string;
  baggageSize?: string;
  allWeight?: boolean;
  static names(): { [key: string]: string } {
    return {
      carryFreepc: 'carry_freepc',
      carryBagWeight: 'carry_bag_weight',
      carryBagSize: 'carry_bag_size',
      isAllCarryBagWeight: 'is_all_carry_bag_weight',
      airline: 'airline',
      startAirport: 'start_airport',
      endAirport: 'end_airport',
      startCityCode: 'start_city_code',
      endCityCode: 'end_city_code',
      freePcs: 'free_pcs',
      baggageWeight: 'baggage_weight',
      baggageUnit: 'baggage_unit',
      baggageSize: 'baggage_size',
      allWeight: 'all_weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carryFreepc: 'number',
      carryBagWeight: 'number',
      carryBagSize: 'string',
      isAllCarryBagWeight: 'boolean',
      airline: 'string',
      startAirport: 'string',
      endAirport: 'string',
      startCityCode: 'string',
      endCityCode: 'string',
      freePcs: 'number',
      baggageWeight: 'number',
      baggageUnit: 'string',
      baggageSize: 'string',
      allWeight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

