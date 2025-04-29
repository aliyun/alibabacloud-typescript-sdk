// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupRequestSystemDiskConfig extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk. You can specify multiple disk categories, and the disk categories are prioritized in the order in which they are specified. If a specified disk category is unavailable, the system uses the next available disk category. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD
   * - cloud: basic disk.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

