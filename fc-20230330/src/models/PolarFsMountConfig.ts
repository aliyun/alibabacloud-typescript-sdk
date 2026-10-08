// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolarFsMountConfig extends $dara.Model {
  /**
   * @example
   * --skip-delete-rows-check=false  --skip-dir-nlink=0
   */
  extraOptions?: string;
  /**
   * @remarks
   * The ID of the PolarFS file system instance to mount.
   * 
   * @example
   * pfs-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The local mount directory in the function\\"s runtime environment.
   * 
   * @example
   * /mnt/polarfs
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether the file system is mounted as read-only. If `true`, write operations are prohibited.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The directory within the PolarFS file system to mount.
   * 
   * @example
   * /share
   */
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      extraOptions: 'extraOptions',
      instanceId: 'instanceId',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
      remoteDir: 'remoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraOptions: 'string',
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

