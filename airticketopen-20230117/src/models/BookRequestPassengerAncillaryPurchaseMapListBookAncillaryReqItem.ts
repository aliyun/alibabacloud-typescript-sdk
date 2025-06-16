// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem extends $dara.Model {
  /**
   * @remarks
   * ancillary product ID, returned by AncillarySuggest.
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * type of ancillary product, only support "4"(4 means paid baggage) currently.
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

