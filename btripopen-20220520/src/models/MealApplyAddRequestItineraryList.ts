// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealApplyAddRequestItineraryListCities } from "./MealApplyAddRequestItineraryListCities";


export class MealApplyAddRequestItineraryList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cities?: MealApplyAddRequestItineraryListCities[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-02-05 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-02-05 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * 2134
   */
  thirdpartItineraryId?: string;
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
      endDate: 'end_date',
      startDate: 'start_date',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': MealApplyAddRequestItineraryListCities },
      endDate: 'string',
      startDate: 'string',
      thirdpartItineraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

