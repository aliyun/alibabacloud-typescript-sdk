// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JuiceFSVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * The additional mount parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The access point address.
   * 
   * @example
   * http://127.0.0.1:8080
   */
  baseURL?: string;
  /**
   * @remarks
   * The remote mount directory.
   * 
   * @example
   * /sandbox/workspace
   */
  remoteDir?: string;
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * xxxxxx
   */
  token?: string;
  /**
   * @remarks
   * The JuiceFS volume name.
   * 
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

