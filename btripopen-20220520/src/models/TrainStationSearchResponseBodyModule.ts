// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainStationSearchResponseBodyModuleCities } from "./TrainStationSearchResponseBodyModuleCities";


export class TrainStationSearchResponseBodyModule extends $dara.Model {
  cities?: TrainStationSearchResponseBodyModuleCities[];
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': TrainStationSearchResponseBodyModuleCities },
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

