// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem } from "./IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem";
import { IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos } from "./IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos";


export class IntlFlightListingSearchResponseBodyModuleFlightItemList extends $dara.Model {
  bestPriceItem?: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem;
  flightJourneyInfos?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos[];
  static names(): { [key: string]: string } {
    return {
      bestPriceItem: 'best_price_item',
      flightJourneyInfos: 'flight_journey_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestPriceItem: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem,
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos },
    };
  }

  validate() {
    if(this.bestPriceItem && typeof (this.bestPriceItem as any).validate === 'function') {
      (this.bestPriceItem as any).validate();
    }
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

