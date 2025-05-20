// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecurityContextCapabilities extends $dara.Model {
  add?: string[];
  drop?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      drop: 'Drop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
      drop: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.add)) {
      $dara.Model.validateArray(this.add);
    }
    if(Array.isArray(this.drop)) {
      $dara.Model.validateArray(this.drop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

