// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestUserCommandOnStart } from "./CreateInstanceRequestUserCommandOnStart";


export class CreateInstanceRequestUserCommand extends $dara.Model {
  onStart?: CreateInstanceRequestUserCommandOnStart;
  static names(): { [key: string]: string } {
    return {
      onStart: 'OnStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onStart: CreateInstanceRequestUserCommandOnStart,
    };
  }

  validate() {
    if(this.onStart && typeof (this.onStart as any).validate === 'function') {
      (this.onStart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

