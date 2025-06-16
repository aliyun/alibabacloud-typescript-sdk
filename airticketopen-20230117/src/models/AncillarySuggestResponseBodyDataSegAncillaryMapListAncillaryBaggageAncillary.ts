// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @remarks
   * baggage quantity, values such as: 3, 2, 1, 0, -2.     -2 indicates weight-based
   * 
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @remarks
   * Baggage weight, 0-50. When isAllWeight=true, it represents the total weight of all baggages.
   * 
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @remarks
   * Unit of baggage weight
   * 
   * @example
   * KG
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
   * Total price
   * 
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

