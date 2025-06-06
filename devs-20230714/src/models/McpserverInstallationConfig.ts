// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPServerInstallationConfig extends $dara.Model {
  args?: string;
  command?: string;
  env?: { [key: string]: string };
  transportType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
      env: 'env',
      transportType: 'transportType',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      env: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      transportType: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.env) {
      $dara.Model.validateMap(this.env);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

