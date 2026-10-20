// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1s5fnvk4gn2tws0****
   */
  diskId?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-3
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The billing cycle of the instance. Valid values:
   * 
   * - Hour
   * - Day
   * - Month
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The display name of the snapshot. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).
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

