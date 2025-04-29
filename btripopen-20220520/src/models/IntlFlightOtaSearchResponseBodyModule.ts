// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfos } from "./IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfos";
import { IntlFlightOtaSearchResponseBodyModuleItemList } from "./IntlFlightOtaSearchResponseBodyModuleItemList";


export class IntlFlightOtaSearchResponseBodyModule extends $dara.Model {
  flightJourneyInfos?: IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfos[];
  itemList?: IntlFlightOtaSearchResponseBodyModuleItemList[];
  static names(): { [key: string]: string } {
    return {
      flightJourneyInfos: 'flight_journey_infos',
      itemList: 'item_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfos },
      itemList: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleItemList },
    };
  }

  validate() {
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

