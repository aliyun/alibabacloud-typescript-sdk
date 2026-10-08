// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for cloud disks that support burst. Valid values:
   * 
   * true: Enabled.
   * false: Disabled.
   * Note
   * An error is returned if you pass any value for cloud disks that do not support the burst feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to release the cloud disk when the associated instance is released. Default value: null, which indicates that the current value is not changed.
   * 
   * Cloud disks that have the multi-attach feature enabled do not support this parameter.
   * 
   * An error is returned if you set DeleteWithInstance to false in the following cases:
   * 
   * The category of the cloud disk is local disk (ephemeral).
   * The category of the cloud disk is basic cloud disk (cloud) and the cloud disk is not detachable (Portable=false).
   * Warning
   * If you set DeleteWithInstance to false and the ECS instance to which the cloud disk is attached is security-locked with "LockReason" : "security" in OperationLocks, the DeleteWithInstance attribute of the cloud disk is ignored and the cloud disk is released together with the instance.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the cloud disk. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud disk whose attributes you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the cloud disk. The name must be 2 to 128 characters in length and can contain Unicode characters under the letter category (including letters from various languages, Chinese characters, and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to obtain the region ID.
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

