// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDisksTags } from "./DescribeDisksResponseBodyDisksDisksTags";


export class DescribeDisksResponseBodyDisksDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the disk.
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: all-flash disk.
   * *   local_hdd: local HDD.
   * *   local_ssd: local SSD.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T14:34:55+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the disk is released when the instance to which the disk is attached is released. Valid values:
   * 
   * *   true: The disk is released when the associated instance is released.
   * *   false: The disk is retained when the associated instance is released.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The namespace description.
   * 
   * @example
   * disk-description
   */
  description?: string;
  /**
   * @remarks
   * The billing method of the cloud disk or local disk. Valid values:
   * 
   * *   **prepaid**: subscription.
   * *   **postpaid**: pay-as-you-go.
   * 
   * @example
   * prepaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5svum1dx1w4a4spr54lgr****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * fvt-ecs-5cf0****
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * False
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used for the cloud disk.
   * 
   * @example
   * 05467897a-4262-4802-b8cb-00d3fb40****
   */
  encryptedKeyId?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-guangzhou-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5t77rb0yoz79m28ku60sx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Edge Prod Environment Streaming Machine -1063
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk or local disk is removable. Valid values:
   * 
   * *   true: The disk is removable. A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
   * *   false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
   * 
   * If disks are of the following categories or types, the **Portable** value is **false** and the disks have the same lifecycle as their attached instances:
   * 
   * *   Local HDDs
   * *   Local SSDs
   * *   Data disks that use the subscription billing method
   * 
   * @example
   * true
   */
  portable?: boolean;
  /**
   * @remarks
   * The serial number.
   * 
   * @example
   * 123
   */
  serialId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * *   In-use: The disk is in use.
   * *   Available: The disk can be attached.
   * *   Attaching: The disk is being attached.
   * *   Detaching: The disk is being detached.
   * *   Creating: The disk is being created.
   * *   ReIniting: The disk is being reset.
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeDisksResponseBodyDisksDisksTags;
  /**
   * @remarks
   * The type of the cloud disk or local disk. Valid values:
   * 
   * *   1: system disk.
   * *   2: data disk.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      encryptedKeyId: 'EncryptedKeyId',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      portable: 'Portable',
      serialId: 'SerialId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      encrypted: 'boolean',
      encryptedKeyId: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      portable: 'boolean',
      serialId: 'string',
      size: 'number',
      snapshotId: 'string',
      status: 'string',
      tags: DescribeDisksResponseBodyDisksDisksTags,
      type: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

