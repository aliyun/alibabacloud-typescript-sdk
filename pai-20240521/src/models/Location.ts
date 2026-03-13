// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Location extends $dara.Model {
  locationType?: string;
  locationValue?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      locationType: 'LocationType',
      locationValue: 'LocationValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationType: 'string',
      locationValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.locationValue) {
      $dara.Model.validateMap(this.locationValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

