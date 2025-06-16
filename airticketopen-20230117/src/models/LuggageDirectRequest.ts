// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LuggageDirectRequestFlightSegmentParamList } from "./LuggageDirectRequestFlightSegmentParamList";


export class LuggageDirectRequest extends $dara.Model {
  flightSegmentParamList?: LuggageDirectRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': LuggageDirectRequestFlightSegmentParamList },
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

