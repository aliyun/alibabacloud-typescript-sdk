// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys } from "./FlightOrderDetailV2responseBodyModuleFlightTaleInfoDtojourneys";


export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO extends $dara.Model {
  journeys?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys[];
  noticeTips?: string;
  tripType?: string;
  /**
   * @example
   * 2
   */
  tripTypeCode?: number;
  static names(): { [key: string]: string } {
    return {
      journeys: 'journeys',
      noticeTips: 'notice_tips',
      tripType: 'trip_type',
      tripTypeCode: 'trip_type_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeys: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys },
      noticeTips: 'string',
      tripType: 'string',
      tripTypeCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.journeys)) {
      $dara.Model.validateArray(this.journeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

