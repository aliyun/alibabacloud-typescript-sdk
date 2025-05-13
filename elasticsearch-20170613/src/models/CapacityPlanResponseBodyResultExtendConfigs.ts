// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * Configuration type, with a single value: sharedDisk.
   * 
   * > This extendConfigs attribute may appear when the planned instance type is Advanced.
   * 
   * @example
   * sharedDisk
   */
  configType?: string;
  /**
   * @remarks
   * Disk size, in GiB.
   * 
   * @example
   * 2048
   */
  disk?: number;
  /**
   * @remarks
   * Disk type, with a single value: CPFS_PREMIUM.
   * 
   * > This extendConfigs attribute may appear when the planned instance type is Advanced.
   * 
   * @example
   * CPFS_PREMIUM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      disk: 'Disk',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

