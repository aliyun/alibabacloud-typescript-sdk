// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdpAttrMapConfigItem } from "./IdpAttrMapConfigItem";


export class IdpAttrMapConfig extends $dara.Model {
  mapItems?: IdpAttrMapConfigItem[];
  static names(): { [key: string]: string } {
    return {
      mapItems: 'MapItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mapItems: { 'type': 'array', 'itemType': IdpAttrMapConfigItem },
    };
  }

  validate() {
    if(Array.isArray(this.mapItems)) {
      $dara.Model.validateArray(this.mapItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

