// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleConfigStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The service modules that you want to query.
   * 
   * This parameter is required.
   */
  moduleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      moduleNames: 'ModuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moduleNames)) {
      $dara.Model.validateArray(this.moduleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

