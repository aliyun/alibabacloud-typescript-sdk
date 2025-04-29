// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertList } from "./IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertList";


export class IntlFlightSegmentAvailableCertResponseBodyModule extends $dara.Model {
  segmentAvailableCertList?: IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertList[];
  static names(): { [key: string]: string } {
    return {
      segmentAvailableCertList: 'segment_available_cert_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentAvailableCertList: { 'type': 'array', 'itemType': IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentAvailableCertList)) {
      $dara.Model.validateArray(this.segmentAvailableCertList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

