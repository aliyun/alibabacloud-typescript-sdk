// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule extends $dara.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

