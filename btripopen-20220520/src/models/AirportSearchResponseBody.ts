// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AirportSearchResponseBodyModuleCities extends $dara.Model {
  /**
   * @example
   * HGH
   */
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
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module。
   */
  module?: AirportSearchResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210f07f316603757445272547d959f
   */
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

