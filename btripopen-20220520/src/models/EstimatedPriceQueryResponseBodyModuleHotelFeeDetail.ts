// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryResponseBodyModuleHotelFeeDetail extends $dara.Model {
  city?: string;
  /**
   * @example
   * 6
   */
  criterion?: number;
  /**
   * @example
   * 1245
   */
  itineraryId?: string;
  /**
   * @example
   * 6
   */
  total?: number;
  /**
   * @example
   * 1
   */
  tripDays?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      criterion: 'criterion',
      itineraryId: 'itinerary_id',
      total: 'total',
      tripDays: 'trip_days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      criterion: 'number',
      itineraryId: 'string',
      total: 'number',
      tripDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

