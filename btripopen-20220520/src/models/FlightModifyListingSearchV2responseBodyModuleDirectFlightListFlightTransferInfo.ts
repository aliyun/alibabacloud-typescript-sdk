// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo } from "./FlightModifyListingSearchV2responseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo";


export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo extends $dara.Model {
  transferAirlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo;
  transferCityCode?: string;
  transferCityName?: string;
  transferDepTime?: string;
  transferFlightNo?: string;
  transferFlightSize?: string;
  /**
   * @example
   * false
   */
  transferShare?: boolean;
  /**
   * @example
   * 60
   */
  transferStopTime?: number;
  static names(): { [key: string]: string } {
    return {
      transferAirlineInfo: 'transfer_airline_info',
      transferCityCode: 'transfer_city_code',
      transferCityName: 'transfer_city_name',
      transferDepTime: 'transfer_dep_time',
      transferFlightNo: 'transfer_flight_no',
      transferFlightSize: 'transfer_flight_size',
      transferShare: 'transfer_share',
      transferStopTime: 'transfer_stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferAirlineInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo,
      transferCityCode: 'string',
      transferCityName: 'string',
      transferDepTime: 'string',
      transferFlightNo: 'string',
      transferFlightSize: 'string',
      transferShare: 'boolean',
      transferStopTime: 'number',
    };
  }

  validate() {
    if(this.transferAirlineInfo && typeof (this.transferAirlineInfo as any).validate === 'function') {
      (this.transferAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

