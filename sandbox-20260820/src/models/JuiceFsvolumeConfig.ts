// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JuiceFSVolumeConfig extends $dara.Model {
  args?: string[];
  /**
   * @example
   * http://127.0.0.1:8080
   */
  baseURL?: string;
  /**
   * @example
   * /sandbox/workspace
   */
  remoteDir?: string;
  /**
   * @example
   * xxxxxx
   */
  token?: string;
  /**
   * @example
   * data
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      baseURL: 'baseURL',
      remoteDir: 'remoteDir',
      token: 'token',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      baseURL: 'string',
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

