// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRegionBlockResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The codes of the countries or areas from which the requests are blocked.
   */
  countries?: number[];
  /**
   * @remarks
   * The codes of the administrative regions in China from which the requests are blocked.
   */
  provinces?: number[];
  /**
   * @remarks
   * The status of the Location Blacklist policy. Valid values:
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * on
   */
  regionBlockSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      countries: 'Countries',
      provinces: 'Provinces',
      regionBlockSwitch: 'RegionBlockSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countries: { 'type': 'array', 'itemType': 'number' },
      provinces: { 'type': 'array', 'itemType': 'number' },
      regionBlockSwitch: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.countries)) {
      $dara.Model.validateArray(this.countries);
    }
    if(Array.isArray(this.provinces)) {
      $dara.Model.validateArray(this.provinces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRegionBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of blocked locations.
   */
  config?: DescribeNetworkRegionBlockResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeNetworkRegionBlockResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

