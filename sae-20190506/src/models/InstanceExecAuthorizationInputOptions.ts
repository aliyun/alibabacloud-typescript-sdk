// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceExecAuthorizationInputOptions extends $dara.Model {
  command?: string[];
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      stderr: 'stderr',
      stdin: 'stdin',
      stdout: 'stdout',
      tty: 'tty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      stderr: 'boolean',
      stdin: 'boolean',
      stdout: 'boolean',
      tty: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

