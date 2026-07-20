// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionNetworkConfig extends $dara.Model {
  allowOut?: string[];
  denyOut?: string[];
  static names(): { [key: string]: string } {
    return {
      allowOut: 'allowOut',
      denyOut: 'denyOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOut: { 'type': 'array', 'itemType': 'string' },
      denyOut: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.allowOut)) {
      $dara.Model.validateArray(this.allowOut);
    }
    if(Array.isArray(this.denyOut)) {
      $dara.Model.validateArray(this.denyOut);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

