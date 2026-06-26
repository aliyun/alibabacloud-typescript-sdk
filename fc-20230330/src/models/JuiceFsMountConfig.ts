// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JuiceFsMountConfig extends $dara.Model {
  /**
   * @remarks
   * An array of strings containing additional command-line arguments for the mount command. For example, use these arguments to set cache sizes or other performance-tuning options.
   */
  args?: string[];
  /**
   * @remarks
   * The path within the function\\"s local filesystem to mount the volume. For example, /mnt/data. This parameter is required.
   */
  mountDir?: string;
  /**
   * @remarks
   * The subdirectory within the JuiceFS volume to mount. If not specified, the root of the volume is mounted.
   */
  remoteDir?: string;
  /**
   * @remarks
   * The authentication token to access the JuiceFS volume.
   */
  token?: string;
  /**
   * @remarks
   * The name of the JuiceFS volume to mount. This parameter is required.
   */
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

