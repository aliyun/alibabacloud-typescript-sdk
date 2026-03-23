// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the burst (performance burst) feature for disks that support it. Valid values:
   * 
   * true: Enabled.
   * false: No.
   * Note
   * If you specify any value for a disk that does not support the burst feature, an error is returned.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is released when its associated instance is released. Default value: none, which means the current setting remains unchanged.
   * 
   * This parameter cannot be set for disks with the multi-attach feature enabled.
   * 
   * An error occurs if you set DeleteWithInstance to false in either of the following cases:
   * 
   * - The disk category is local disk (ephemeral).
   * - The disk category is basic disk (cloud) and the disk is non-portable (Portable=false).
   * 
   * Warning
   * If you set DeleteWithInstance to false, but the ECS instance to which the disk is attached is security locked (indicated by "LockReason": "security" in OperationLocks), the disk will be released together with the instance regardless of the DeleteWithInstance setting when the instance is released.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk whose property you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
  /**
   * @remarks
   * Disk name. The name must be 2 to 128 characters in length and can contain characters from the letter categorization in Unicode (including English letters, Chinese characters, and digits). It can also include colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to obtain valid region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskId: 'DiskId',
      diskName: 'DiskName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      diskId: 'string',
      diskName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

