// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleOrderItemListBaggageRuleBaggageInfoMapValue extends $dara.Model {
  /**
   * @example
   * 1
   */
  carryFreepc?: number;
  /**
   * @example
   * 10
   */
  carryBagWeight?: number;
  /**
   * @example
   * 10
   */
  carryBagSize?: string;
  /**
   * @example
   * false
   */
  isAllCarryBagWeight?: boolean;
  /**
   * @example
   * CZ
   */
  airline?: string;
  /**
   * @example
   * PKX
   */
  startAirport?: string;
  /**
   * @example
   * CAN
   */
  endAirport?: string;
  /**
   * @example
   * BJS
   */
  startCityCode?: string;
  /**
   * @example
   * CAN
   */
  endCityCode?: string;
  /**
   * @example
   * 1
   */
  freePcs?: number;
  /**
   * @example
   * 10
   */
  baggageWeight?: number;
  /**
   * @example
   * kg
   */
  baggageUnit?: string;
  /**
   * @example
   * 10
   */
  baggageSize?: string;
  /**
   * @example
   * false
   */
  allWeight?: boolean;
  /**
   * @example
   * 1
   */
  totalPcs?: number;
  /**
   * @example
   * 10
   */
  totalWeight?: number;
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
      totalPcs: 'total_pcs',
      totalWeight: 'total_weight',
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
      totalPcs: 'number',
      totalWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

