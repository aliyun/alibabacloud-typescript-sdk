// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue extends $dara.Model {
  /**
   * @remarks
   * checked baggage quantity
   * 
   * @example
   * 22
   */
  baggageAmount?: number;
  /**
   * @remarks
   * checked baggage weight
   * 
   * @example
   * 2
   */
  baggageWeight?: number;
  /**
   * @remarks
   * checked baggage weight unit
   * 
   * @example
   * kg
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * carry-on baggage quantity
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * carry-on baggage weight
   * 
   * @example
   * 2
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * carry-on baggage weight unit
   * 
   * @example
   * kg
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllCarryOnWeight?: boolean;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

