// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList } from "./FlightOrderDetailV2responseBodyModuleFlightTaleInfoDtojourneysSegmentList";


export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys extends $dara.Model {
  /**
   * @example
   * 85
   */
  allFlyDuration?: number;
  /**
   * @example
   * 85
   */
  allFlyDurationAfterChange?: number;
  applyId?: number;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  baggageDetails?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  flightStatus?: string;
  /**
   * @remarks
   * iata_no
   * 
   * @example
   * iata_no
   */
  iataNo?: string;
  isReshopJourney?: boolean;
  isTransfer?: boolean;
  journeyTitle?: string;
  refundChangeDetails?: string;
  segmentList?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      allFlyDuration: 'all_fly_duration',
      allFlyDurationAfterChange: 'all_fly_duration_after_change',
      applyId: 'apply_id',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      baggageDetails: 'baggage_details',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      flightStatus: 'flight_status',
      iataNo: 'iata_no',
      isReshopJourney: 'is_reshop_journey',
      isTransfer: 'is_transfer',
      journeyTitle: 'journey_title',
      refundChangeDetails: 'refund_change_details',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFlyDuration: 'number',
      allFlyDurationAfterChange: 'number',
      applyId: 'number',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDetails: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      flightStatus: 'string',
      iataNo: 'string',
      isReshopJourney: 'boolean',
      isTransfer: 'boolean',
      journeyTitle: 'string',
      refundChangeDetails: 'string',
      segmentList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

