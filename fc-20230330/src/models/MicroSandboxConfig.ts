// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MicroSandboxConfig extends $dara.Model {
  osType?: string;
  readyCommand?: string;
  startCommand?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'osType',
      readyCommand: 'readyCommand',
      startCommand: 'startCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
      readyCommand: 'string',
      startCommand: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

