// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark";


export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo;
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  depAirportInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo;
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  duration?: number;
  flightNo?: string;
  flightShareInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList[];
  flightType?: string;
  luggageDirectInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  oneMore?: number;
  oneMoreShow?: string;
  segmentIndex?: number;
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark;
  share?: boolean;
  shortFlightSize?: string;
  stop?: boolean;
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      luggageDirectInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      totalTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(Array.isArray(this.flightStopInfoList)) {
      $dara.Model.validateArray(this.flightStopInfoList);
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

