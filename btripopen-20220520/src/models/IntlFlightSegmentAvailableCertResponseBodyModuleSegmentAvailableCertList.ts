// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertListSegmentPosition } from "./IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertListSegmentPosition";


export class IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertList extends $dara.Model {
  certTypes?: number[];
  segmentPosition?: IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertListSegmentPosition;
  static names(): { [key: string]: string } {
    return {
      certTypes: 'cert_types',
      segmentPosition: 'segment_position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certTypes: { 'type': 'array', 'itemType': 'number' },
      segmentPosition: IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertListSegmentPosition,
    };
  }

  validate() {
    if(Array.isArray(this.certTypes)) {
      $dara.Model.validateArray(this.certTypes);
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

