// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  /**
   * @example
   * 10.0
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

