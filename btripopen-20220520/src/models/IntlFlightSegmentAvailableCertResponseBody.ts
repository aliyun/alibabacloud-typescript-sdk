// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightSegmentAvailableCertResponseBodyModuleSegmentAvailableCertListSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class IntlFlightSegmentAvailableCertResponseBody extends $dara.Model {
  module?: IntlFlightSegmentAvailableCertResponseBodyModule;
  /**
   * @example
   * 210bc81a17090871660176894d008c
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  resultCode?: string;
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 213e1ea516895592036143147e5864
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      requestId: 'requestId',
      resultCode: 'result_code',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: IntlFlightSegmentAvailableCertResponseBodyModule,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

