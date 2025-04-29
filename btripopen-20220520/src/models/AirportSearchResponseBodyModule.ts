// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AirportSearchResponseBodyModuleCities } from "./AirportSearchResponseBodyModuleCities";


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

