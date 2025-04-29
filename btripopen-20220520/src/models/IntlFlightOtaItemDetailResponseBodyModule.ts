// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaItemDetailResponseBodyModuleFlightJourneyInfos } from "./IntlFlightOtaItemDetailResponseBodyModuleFlightJourneyInfos";
import { IntlFlightOtaItemDetailResponseBodyModuleGroupItem } from "./IntlFlightOtaItemDetailResponseBodyModuleGroupItem";
import { IntlFlightOtaItemDetailResponseBodyModuleShutterDocs } from "./IntlFlightOtaItemDetailResponseBodyModuleShutterDocs";


export class IntlFlightOtaItemDetailResponseBodyModule extends $dara.Model {
  flightJourneyInfos?: IntlFlightOtaItemDetailResponseBodyModuleFlightJourneyInfos[];
  groupItem?: IntlFlightOtaItemDetailResponseBodyModuleGroupItem;
  shutterDocs?: IntlFlightOtaItemDetailResponseBodyModuleShutterDocs[];
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      flightJourneyInfos: 'flight_journey_infos',
      groupItem: 'group_item',
      shutterDocs: 'shutter_docs',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightOtaItemDetailResponseBodyModuleFlightJourneyInfos },
      groupItem: IntlFlightOtaItemDetailResponseBodyModuleGroupItem,
      shutterDocs: { 'type': 'array', 'itemType': IntlFlightOtaItemDetailResponseBodyModuleShutterDocs },
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    if(this.groupItem && typeof (this.groupItem as any).validate === 'function') {
      (this.groupItem as any).validate();
    }
    if(Array.isArray(this.shutterDocs)) {
      $dara.Model.validateArray(this.shutterDocs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

