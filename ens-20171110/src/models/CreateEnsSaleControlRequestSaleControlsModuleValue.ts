// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsSaleControlRequestSaleControlsModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  moduleValue?: string[];
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
      moduleValue: 'ModuleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
      moduleValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moduleValue)) {
      $dara.Model.validateArray(this.moduleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

