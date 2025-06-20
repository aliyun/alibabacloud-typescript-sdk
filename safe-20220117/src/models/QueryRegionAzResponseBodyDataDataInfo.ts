// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegionAzResponseBodyDataDataInfo extends $dara.Model {
  azList?: string[];
  regionCode?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      azList: 'AzList',
      regionCode: 'RegionCode',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azList: { 'type': 'array', 'itemType': 'string' },
      regionCode: 'string',
      regionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.azList)) {
      $dara.Model.validateArray(this.azList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

