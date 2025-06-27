// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode } from "./SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode";


export class SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes extends $dara.Model {
  ispCityNode?: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

