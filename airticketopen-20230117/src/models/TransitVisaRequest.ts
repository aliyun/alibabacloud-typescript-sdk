// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransitVisaRequestFlightSegmentParamList } from "./TransitVisaRequestFlightSegmentParamList";


export class TransitVisaRequest extends $dara.Model {
  flightSegmentParamList?: TransitVisaRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': TransitVisaRequestFlightSegmentParamList },
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentParamList)) {
      $dara.Model.validateArray(this.flightSegmentParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

