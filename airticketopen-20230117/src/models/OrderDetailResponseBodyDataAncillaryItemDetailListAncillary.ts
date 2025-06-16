// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary } from "./OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary";


export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillary extends $dara.Model {
  /**
   * @remarks
   * ancillay_id
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * ancillary product type currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  baggageAncillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
      baggageAncillary: 'baggage_ancillary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
      baggageAncillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary,
    };
  }

  validate() {
    if(this.baggageAncillary && typeof (this.baggageAncillary as any).validate === 'function') {
      (this.baggageAncillary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

