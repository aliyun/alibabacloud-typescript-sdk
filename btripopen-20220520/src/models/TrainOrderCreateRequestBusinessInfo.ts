// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateRequestBusinessInfo extends $dara.Model {
  /**
   * @example
   * 4321
   */
  customerApplyId?: string;
  /**
   * @example
   * 1234
   */
  customerItineraryId?: string;
  static names(): { [key: string]: string } {
    return {
      customerApplyId: 'customer_apply_id',
      customerItineraryId: 'customer_itinerary_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerApplyId: 'string',
      customerItineraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

