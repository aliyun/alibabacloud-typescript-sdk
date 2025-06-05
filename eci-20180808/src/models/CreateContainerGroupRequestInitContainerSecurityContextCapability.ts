// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestInitContainerSecurityContextCapability extends $dara.Model {
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.add)) {
      $dara.Model.validateArray(this.add);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

