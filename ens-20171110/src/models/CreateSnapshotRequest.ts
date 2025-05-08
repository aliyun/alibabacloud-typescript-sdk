// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1s5fnvk4gn2tws0****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-3
   */
  ensRegionId?: string;
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diskId: 'DiskId',
      ensRegionId: 'EnsRegionId',
      instanceBillingCycle: 'InstanceBillingCycle',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diskId: 'string',
      ensRegionId: 'string',
      instanceBillingCycle: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

