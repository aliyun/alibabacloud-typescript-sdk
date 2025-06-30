// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList } from "./IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList";


export class IntlFlightReShopConsultResponseBodyModule extends $dara.Model {
  passengerJourneyGroupInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupInfoList: 'passenger_journey_group_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerJourneyGroupInfoList)) {
      $dara.Model.validateArray(this.passengerJourneyGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

