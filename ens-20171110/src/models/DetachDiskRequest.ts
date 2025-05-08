// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5r7v69e0bejrnzger09w7****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5inkeimcipxk26yqtzm4q****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

