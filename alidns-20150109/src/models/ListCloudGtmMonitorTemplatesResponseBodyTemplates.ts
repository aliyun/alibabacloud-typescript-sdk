// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate } from "./ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate";


export class ListCloudGtmMonitorTemplatesResponseBodyTemplates extends $dara.Model {
  template?: ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate },
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

