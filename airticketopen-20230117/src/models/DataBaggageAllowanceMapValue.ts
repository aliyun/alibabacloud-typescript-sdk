// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataBaggageAllowanceMapValue extends $dara.Model {
  /**
   * @remarks
   * 托运行李件数
   * 
   * @example
   * 1
   */
  baggageAmount?: number;
  /**
   * @remarks
   * 托运行李重量
   * 
   * @example
   * 10
   */
  baggageWeight?: number;
  /**
   * @remarks
   * 托运行李重量单位
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * 是否所有托运行李重量
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * 手提行李件数
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * 手提行李重量
   * 
   * @example
   * 5
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * 手提行李重量单位
   * 
   * @example
   * KG
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * 是否所有手提行李重量
   * 
   * @example
   * true
   */
  isAllCarryOnWeight?: boolean;
  /**
   * @example
   * 55
   */
  carryLength?: number;
  /**
   * @example
   * 40
   */
  carryWidth?: number;
  /**
   * @example
   * 20
   */
  carryHeight?: number;
  /**
   * @example
   * 115
   */
  carrySumOfLengthWidthHeight?: number;
  /**
   * @example
   * 60
   */
  length?: number;
  /**
   * @example
   * 40
   */
  width?: number;
  /**
   * @example
   * 60
   */
  height?: number;
  /**
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

