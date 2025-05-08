// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiskRequestTag } from "./CreateDiskRequestTag";


export class CreateDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: all-flash disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * yourDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the new system disk. Valid values:
   * 
   * *   **true**
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The billing method of the instance. Set the value to **PostPaid**.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used by the cloud disk.
   * 
   * >  If you set the **Encrypted** parameter to **true**, the default service key is used when the **KMSKeyId** parameter is empty.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fxxxxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: string;
  /**
   * @remarks
   * The ID of the snapshot that you want to use to create the disk.
   * 
   * The following limits apply to the **SnapshotId** and **Size** parameters:
   * 
   * *   If the size of the snapshot specified by **SnapshotId** is greater than the specified **Size** value, the size of the created disk is equal to the specified snapshot size.
   * *   If the size of the snapshot specified by **SnapshotId** is smaller than the specified **Size** value, the size of the created disk is equal to the specified **Size** value.
   * 
   * @example
   * s-897654321****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tags of the instance. You can specify at most 20 tags in each call.
   */
  tag?: CreateDiskRequestTag[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      ensRegionId: 'EnsRegionId',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      KMSKeyId: 'KMSKeyId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskName: 'string',
      encrypted: 'boolean',
      ensRegionId: 'string',
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      KMSKeyId: 'string',
      size: 'string',
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

