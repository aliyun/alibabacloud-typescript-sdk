// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyCloudDisks extends $dara.Model {
  /**
   * @remarks
   * Disk Capacity
   * 
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @remarks
   * The mount path of the cloud disk in the container.
   * 
   * @example
   * /mmt/workspace
   */
  mountPath?: string;
  /**
   * @remarks
   * The directory on the cloud disk that is mounted to the container.
   * 
   * @example
   * /workspace
   */
  path?: string;
  /**
   * @remarks
   * The usage mode of the cloud disk. The value rootfs indicates that the cloud disk is used as the root file system.
   * 
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

