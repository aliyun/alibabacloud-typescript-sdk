// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItem } from "./FlightListingSearchV2responseBodyModuleFlightItemListBestPriceItem";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfos } from "./FlightListingSearchV2responseBodyModuleFlightItemListFlightJourneyInfos";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListItemList } from "./FlightListingSearchV2responseBodyModuleFlightItemListItemList";


export class FlightListingSearchV2ResponseBodyModuleFlightItemList extends $dara.Model {
  bestPriceItem?: FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItem;
  flightJourneyInfos?: FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfos[];
  itemList?: FlightListingSearchV2ResponseBodyModuleFlightItemListItemList[];
  static names(): { [key: string]: string } {
    return {
      bestPriceItem: 'best_price_item',
      flightJourneyInfos: 'flight_journey_infos',
      itemList: 'item_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestPriceItem: FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItem,
      flightJourneyInfos: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemListFlightJourneyInfos },
      itemList: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemListItemList },
    };
  }

  validate() {
    if(this.bestPriceItem && typeof (this.bestPriceItem as any).validate === 'function') {
      (this.bestPriceItem as any).validate();
    }
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

