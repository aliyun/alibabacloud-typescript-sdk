// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo } from "./FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo";
import { FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo } from "./FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo";
import { FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo } from "./FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo";
import { FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList } from "./FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList";


export class FlightSearchListResponseBodyModuleFlightListTransferInfo extends $dara.Model {
  flightSize?: string;
  /**
   * @example
   * demo
   */
  flightType?: string;
  transferAirlineInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo;
  transferArrAirportInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  transferArrDate?: string;
  transferDepAirportInfo?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  transferDepDate?: string;
  /**
   * @example
   * CA1234
   */
  transferFlightNo?: string;
  transferFlightRuleList?: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList[];
  static names(): { [key: string]: string } {
    return {
      flightSize: 'flight_size',
      flightType: 'flight_type',
      transferAirlineInfo: 'transfer_airline_info',
      transferArrAirportInfo: 'transfer_arr_airport_info',
      transferArrDate: 'transfer_arr_date',
      transferDepAirportInfo: 'transfer_dep_airport_info',
      transferDepDate: 'transfer_dep_date',
      transferFlightNo: 'transfer_flight_no',
      transferFlightRuleList: 'transfer_flight_rule_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSize: 'string',
      flightType: 'string',
      transferAirlineInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferAirlineInfo,
      transferArrAirportInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferArrAirportInfo,
      transferArrDate: 'string',
      transferDepAirportInfo: FlightSearchListResponseBodyModuleFlightListTransferInfoTransferDepAirportInfo,
      transferDepDate: 'string',
      transferFlightNo: 'string',
      transferFlightRuleList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListTransferInfoTransferFlightRuleList },
    };
  }

  validate() {
    if(this.transferAirlineInfo && typeof (this.transferAirlineInfo as any).validate === 'function') {
      (this.transferAirlineInfo as any).validate();
    }
    if(this.transferArrAirportInfo && typeof (this.transferArrAirportInfo as any).validate === 'function') {
      (this.transferArrAirportInfo as any).validate();
    }
    if(this.transferDepAirportInfo && typeof (this.transferDepAirportInfo as any).validate === 'function') {
      (this.transferDepAirportInfo as any).validate();
    }
    if(Array.isArray(this.transferFlightRuleList)) {
      $dara.Model.validateArray(this.transferFlightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

