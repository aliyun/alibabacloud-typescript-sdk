// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList } from "./IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList";
import { IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList } from "./IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList";
import { IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList } from "./IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList";
import { IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList } from "./IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList";


export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList extends $dara.Model {
  passengerJourneyGroupKey?: string;
  passengerList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList[];
  passengerSegmentStatusInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList[];
  reShopReasonInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList[];
  segmentList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      passengerList: 'passenger_list',
      passengerSegmentStatusInfoList: 'passenger_segment_status_info_list',
      reShopReasonInfoList: 're_shop_reason_info_list',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupKey: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList },
      passengerSegmentStatusInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList },
      reShopReasonInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList },
      segmentList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerSegmentStatusInfoList)) {
      $dara.Model.validateArray(this.passengerSegmentStatusInfoList);
    }
    if(Array.isArray(this.reShopReasonInfoList)) {
      $dara.Model.validateArray(this.reShopReasonInfoList);
    }
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

