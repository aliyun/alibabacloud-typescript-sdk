// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary } from "./AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary";


export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary extends $dara.Model {
  /**
   * @remarks
   * Ancillary product ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU
   */
  ancillaryId?: string;
  /**
   * @remarks
   * Ancillary product type. currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  /**
   * @remarks
   * Baggage details
   */
  baggageAncillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary;
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
      baggageAncillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary,
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

