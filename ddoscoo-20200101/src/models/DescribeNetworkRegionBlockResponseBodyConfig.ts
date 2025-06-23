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

