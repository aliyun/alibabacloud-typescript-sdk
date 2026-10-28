// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LocalMountSpec extends $dara.Model {
  /**
   * @remarks
   * The local path on the host. This field is invalid when MountMode is set to Block.
   * 
   * @example
   * /local/a
   */
  localPath?: string;
  /**
   * @remarks
   * The mount mode. Valid values: Block and Filesystem.
   * 
   * @example
   * Filesystem
   */
  mountMode?: string;
  /**
   * @remarks
   * The absolute mount path in the container. The path must start with a forward slash (/). When MountMode is set to Block, the path must start with /dev/.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      localPath: 'LocalPath',
      mountMode: 'MountMode',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localPath: 'string',
      mountMode: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

