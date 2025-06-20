// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockEventRequestRegionReqs extends $dara.Model {
  productCode?: string;
  regions?: string[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

