// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesCloudDisks extends $dara.Model {
  /**
   * @remarks
   * The cloud disk capacity.
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
   * The cloud disk type. The value rootfs indicates that the cloud disk is used as the root file system (rootfs).
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

