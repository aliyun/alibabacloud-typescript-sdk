// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomRuntimeConfig extends $dara.Model {
  args?: string[];
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

