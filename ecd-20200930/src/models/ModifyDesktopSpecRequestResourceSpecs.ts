// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopSpecRequestResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The target size of the system disk. Valid values: 80-500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The target size of the data disk. Valid values: 80-500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 20
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

