// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachSharedStoragesRequestSharedStorages extends $dara.Model {
  /**
   * @remarks
   * The local mount directory of the mounted file system.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

