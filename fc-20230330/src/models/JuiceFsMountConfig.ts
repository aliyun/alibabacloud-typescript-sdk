// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JuiceFsMountConfig extends $dara.Model {
  args?: string[];
  mountDir?: string;
  remoteDir?: string;
  token?: string;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      mountDir: 'mountDir',
      remoteDir: 'remoteDir',
      token: 'token',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      mountDir: 'string',
      remoteDir: 'string',
      token: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

