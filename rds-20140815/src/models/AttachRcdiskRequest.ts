// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the cloud disk is released when the instance is released. Valid values:
   * 
   * true: The cloud disk is released when the instance is released.
   * false: The cloud disk is not released when the instance is released. The cloud disk is retained as a pay-as-you-go data cloud disk.
   * Default value: false.
   * 
   * When you configure this parameter, take note of the following items:
   * 
   * If you set DeleteWithInstance to false and the instance is locked for security reasons, meaning that OperationLocks contains "LockReason" : "security", this parameter is ignored and the cloud disk is released along with the instance.
   * 
   * If the cloud disk to be attached is an elastic ephemeral disk, you must set DeleteWithInstance to true.
   * 
   * This parameter is not supported for cloud disks that have the multi-attach feature enabled.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the cloud disk to be attached. The cloud disk (DiskId) and the instance (InstanceId) must be in the same zone.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-wz98hnpj2sjo85zc7t2w
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the destination RDS Custom instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      diskId: 'string',
      instanceId: 'string',
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

