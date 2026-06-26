// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolarFsMountConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarFS file system instance to mount.
   */
  instanceId?: string;
  /**
   * @remarks
   * The local mount directory in the function\\"s runtime environment.
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether the file system is mounted as read-only. If `true`, write operations are prohibited.
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The directory within the PolarFS file system to mount.
   */
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
      remoteDir: 'remoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
      remoteDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

