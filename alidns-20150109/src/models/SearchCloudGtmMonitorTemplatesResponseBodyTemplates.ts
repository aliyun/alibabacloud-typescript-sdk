// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate } from "./SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate";


export class SearchCloudGtmMonitorTemplatesResponseBodyTemplates extends $dara.Model {
  template?: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

