// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CitySearchResponseBodyModuleCities } from "./CitySearchResponseBodyModuleCities";


export class CitySearchResponseBodyModule extends $dara.Model {
  cities?: CitySearchResponseBodyModuleCities[];
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': CitySearchResponseBodyModuleCities },
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

