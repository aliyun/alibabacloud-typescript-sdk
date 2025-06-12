// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValuateTemplateResponseBodyDataResourceList } from "./ValuateTemplateResponseBodyDataResourceList";


export class ValuateTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result set of the inquiry.
   */
  resourceList?: ValuateTemplateResponseBodyDataResourceList[];
  static names(): { [key: string]: string } {
    return {
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

