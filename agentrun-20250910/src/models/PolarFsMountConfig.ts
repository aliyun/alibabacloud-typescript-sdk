// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolarFsMountConfig extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * pfs-cn-6sa48a6gk001
   */
  instanceId?: string;
  /**
   * @remarks
   * Local mount folder.
   * 
   * @example
   * /
   */
  mountDir?: string;
  /**
   * @remarks
   * Remote mount folder
   * 
   * @example
   * /mnt/pfs
   */
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      mountDir: 'mountDir',
      remoteDir: 'remoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountDir: 'string',
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

