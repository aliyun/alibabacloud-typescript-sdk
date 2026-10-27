// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolarFsMountConfig extends $dara.Model {
  /**
   * @remarks
   * The additional mount parameter settings.
   * 
   * @example
   * --skip-delete-rows-check=false  --skip-dir-nlink=0
   */
  extraOptions?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * @example
   * pfs-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /mnt/polarfs
   */
  mountDir?: string;
  /**
   * @remarks
   * The read-only mount.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The PolarFS directory.
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

