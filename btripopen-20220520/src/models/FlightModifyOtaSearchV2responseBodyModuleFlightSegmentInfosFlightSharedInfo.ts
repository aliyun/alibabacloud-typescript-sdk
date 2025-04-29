// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo";


export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfo extends $dara.Model {
  operatingFlightNo?: string;
  operatingAirlineInfo?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo;
  static names(): { [key: string]: string } {
    return {
      operatingFlightNo: 'operating_flight_no',
      operatingAirlineInfo: 'operating_airline_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingFlightNo: 'string',
      operatingAirlineInfo: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo,
    };
  }

  validate() {
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

