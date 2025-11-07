// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue extends $dara.Model {
  /**
   * @remarks
   * Number of checked baggage pieces
   * 
   * @example
   * 22
   */
  baggageAmount?: number;
  /**
   * @remarks
   * Weight of checked baggage
   * 
   * @example
   * 2
   */
  baggageWeight?: number;
  /**
   * @remarks
   * Unit of checked baggage weight (KG)
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight applies to all checked baggage
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * Number of carry-on baggage pieces
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * Weight of carry-on baggage
   * 
   * @example
   * 2
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * Carry-on luggage weight unit KG
   * 
   * @example
   * KG
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * Whether it is the total carry-on luggage weight
   * 
   * @example
   * true
   */
  isAllCarryOnWeight?: boolean;
  /**
   * @remarks
   * Carry-on luggage length (unit: centimeters)
   * 
   * @example
   * 55
   */
  carryLength?: number;
  /**
   * @remarks
   * Carry-on luggage width (unit: centimeters)
   * 
   * @example
   * 40
   */
  carryWidth?: number;
  /**
   * @remarks
   * Carry-on luggage height (unit: centimeters)
   * 
   * @example
   * 20
   */
  carryHeight?: number;
  /**
   * @remarks
   * Sum of three sides of the Carry-on luggage (unit: centimeters)
   * 
   * @example
   * 115
   */
  carrySumOfLengthWidthHeight?: number;
  /**
   * @remarks
   * Check-in luggage length (unit: centimeters)
   * 
   * @example
   * 60
   */
  length?: number;
  /**
   * @remarks
   * Check-in luggage width (unit: centimeters)
   * 
   * @example
   * 40
   */
  width?: number;
  /**
   * @remarks
   * Check-in luggage height (unit: centimeters)
   * 
   * @example
   * 60
   */
  height?: number;
  /**
   * @remarks
   * Sum of three sides of the Check-in luggage (unit: centimeters)
   * 
   * @example
   * 200
   */
  sumOfLengthWidthHeight?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      carryOnAmount: 'carry_on_amount',
      carryOnWeight: 'carry_on_weight',
      carryOnWeightUnit: 'carry_on_weight_unit',
      isAllCarryOnWeight: 'is_all_carry_on_weight',
      carryLength: 'carry_length',
      carryWidth: 'carry_width',
      carryHeight: 'carry_height',
      carrySumOfLengthWidthHeight: 'carry_sum_of_length_width_height',
      length: 'length',
      width: 'width',
      height: 'height',
      sumOfLengthWidthHeight: 'sum_of_length_width_height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      carryOnAmount: 'number',
      carryOnWeight: 'number',
      carryOnWeightUnit: 'string',
      isAllCarryOnWeight: 'boolean',
      carryLength: 'number',
      carryWidth: 'number',
      carryHeight: 'number',
      carrySumOfLengthWidthHeight: 'number',
      length: 'number',
      width: 'number',
      height: 'number',
      sumOfLengthWidthHeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

