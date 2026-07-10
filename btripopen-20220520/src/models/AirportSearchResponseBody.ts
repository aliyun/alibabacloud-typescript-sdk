// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AirportSearchResponseBodyModuleCities extends $dara.Model {
  code?: string;
  /**
   * @example
   * 100
   */
  distance?: number;
  name?: string;
  /**
   * @example
   * 上海
   */
  travelName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      distance: 'distance',
      name: 'name',
      travelName: 'travel_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      distance: 'number',
      name: 'string',
      travelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponseBodyModule extends $dara.Model {
  cities?: AirportSearchResponseBodyModuleCities[];
  nearby?: boolean;
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
      nearby: 'nearby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': AirportSearchResponseBodyModuleCities },
      nearby: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AirportSearchResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: AirportSearchResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: AirportSearchResponseBodyModule,
      requestId: 'string',
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

