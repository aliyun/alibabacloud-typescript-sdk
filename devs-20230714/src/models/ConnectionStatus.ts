// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Installation } from "./Installation";


export class ConnectionStatus extends $dara.Model {
  installation?: Installation;
  static names(): { [key: string]: string } {
    return {
      installation: 'installation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installation: Installation,
    };
  }

  validate() {
    if(this.installation && typeof (this.installation as any).validate === 'function') {
      (this.installation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

