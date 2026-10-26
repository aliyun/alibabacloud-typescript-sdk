// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for disks that support this feature. Valid values:
   * 
   * true: enables the feature.
   * false: disables the feature.
   * Note
   * An error is returned if you specify any value for a disk that does not support the performance burst feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk when the instance is released. Default value: null. A value of null indicates that the current value remains unchanged.
   * 
   * You cannot configure this parameter for cloud disks that have the multi-attach feature enabled.
   * 
   * An error is returned if you set the DeleteWithInstance parameter to false in the following scenarios:
   * 
   * The disk category is local disk (ephemeral).
   * The disk category is basic cloud disk (cloud) and the disk is not detachable (Portable=false).
   * Warning
   * If you set this parameter to false and the ECS instance to which the disk is attached is locked for security reasons (the OperationLocks parameter indicates "LockReason" : "security"), the disk is released along with the instance regardless of the DeleteWithInstance setting when the instance is released.
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
   * The ID of the disk whose attributes you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
  /**
   * @remarks
   * The cloud disk name. The name must be 2 to 128 characters in length and can contain characters in the Letter category of Unicode, such as English letters, Chinese characters, and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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

