// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveTerminalsResponseBodyTerminalsTerminal } from "./RemoveTerminalsResponseBodyTerminalsTerminal";


export class RemoveTerminalsResponseBodyTerminals extends $dara.Model {
  terminal?: RemoveTerminalsResponseBodyTerminalsTerminal[];
  static names(): { [key: string]: string } {
    return {
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terminal: { 'type': 'array', 'itemType': RemoveTerminalsResponseBodyTerminalsTerminal },
    };
  }

  validate() {
    if(Array.isArray(this.terminal)) {
      $dara.Model.validateArray(this.terminal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

