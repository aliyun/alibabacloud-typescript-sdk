// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealApplyQueryResponseBodyModuleItineraryListCities } from "./MealApplyQueryResponseBodyModuleItineraryListCities";


export class MealApplyQueryResponseBodyModuleItineraryList extends $dara.Model {
  cities?: MealApplyQueryResponseBodyModuleItineraryListCities[];
  endDate?: string;
  startDate?: string;
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
      cities: { 'type': 'array', 'itemType': MealApplyQueryResponseBodyModuleItineraryListCities },
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

