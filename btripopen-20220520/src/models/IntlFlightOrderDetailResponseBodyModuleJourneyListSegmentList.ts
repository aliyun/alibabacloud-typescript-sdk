// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListFlightOtherInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListFlightOtherInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListLuggageDirectInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListLuggageDirectInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListMarketingAirlineInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListMarketingAirlineInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListOperatingAirlineInfo } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListOperatingAirlineInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListSegmentVisaRemark } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListSegmentVisaRemark";
import { IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListStopCityList } from "./IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListStopCityList";


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2024-07-06 14:05:00
   */
  arrTime?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  depAirportCode?: string;
  depAirportName?: string;
  /**
   * @example
   * SHA
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2024-07-06 11:10:00
   */
  depTime?: string;
  flightOtherInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListFlightOtherInfo;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListLuggageDirectInfo;
  /**
   * @example
   * MU
   */
  marketingAirline?: string;
  marketingAirlineInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListMarketingAirlineInfo;
  /**
   * @example
   * MU507
   */
  marketingFlightNo?: string;
  /**
   * @example
   * MU
   */
  operatingAirline?: string;
  operatingAirlineInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListOperatingAirlineInfo;
  /**
   * @example
   * MU507
   */
  operatingFlightNo?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * MU507PVGHKG0706
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListSegmentVisaRemark;
  stopCityList?: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListStopCityList[];
  /**
   * @example
   * 0
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      codeShare: 'code_share',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightOtherInfo: 'flight_other_info',
      journeyIndex: 'journey_index',
      luggageDirectInfo: 'luggage_direct_info',
      marketingAirline: 'marketing_airline',
      marketingAirlineInfo: 'marketing_airline_info',
      marketingFlightNo: 'marketing_flight_no',
      operatingAirline: 'operating_airline',
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      codeShare: 'boolean',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightOtherInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListFlightOtherInfo,
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListLuggageDirectInfo,
      marketingAirline: 'string',
      marketingAirlineInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListMarketingAirlineInfo,
      marketingFlightNo: 'string',
      operatingAirline: 'string',
      operatingAirlineInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListOperatingAirlineInfo,
      operatingFlightNo: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListSegmentVisaRemark,
      stopCityList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListStopCityList },
      stopQuantity: 'number',
    };
  }

  validate() {
    if(this.flightOtherInfo && typeof (this.flightOtherInfo as any).validate === 'function') {
      (this.flightOtherInfo as any).validate();
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.marketingAirlineInfo && typeof (this.marketingAirlineInfo as any).validate === 'function') {
      (this.marketingAirlineInfo as any).validate();
    }
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    if(Array.isArray(this.stopCityList)) {
      $dara.Model.validateArray(this.stopCityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

