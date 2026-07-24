// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransitVisaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of flight segments that constitute an itinerary. Maximum size: 2.
   */
  flightSegmentParamListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamListShrink: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

