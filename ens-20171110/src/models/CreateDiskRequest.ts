// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N for the instance. Valid values of N: **1** to **20**.
   * 
   * - The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The key can be up to 64 characters in length.
   * - The key cannot be an empty string.
   * 
   * @example
   * pro
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N for the topic. **Key** and **Value** must be both specified or both left empty. If both are specified, the system filters topics that match the tag. If neither is specified, the system queries all topics.
   * 
   * - Valid values of N: 1 to 20.
   * - The value can be an empty string.
   * - The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the cloud disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk
   * - cloud_ssd: all-flash disk
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The name of the cloud disk.
   * 
   * @example
   * yourDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the cloud disk. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false** (default): no
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The billing cycle of the instance. Valid values: Hour, Day, and Month.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The billing method of the instance. Only **PostPaid** (pay-as-you-go) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for the cloud disk.
   * 
   * > If **Encrypted** is set to **true** and **KMSKeyId** is left empty, the default service key is used.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fxxxxx
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The size of the cloud disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: string;
  /**
   * @remarks
   * The ID of the snapshot used to create the cloud disk.
   * 
   * The **SnapshotId** and **Size** parameters are subject to the following limits:
   * 
   * - If snapshot size of the snapshot specified by **SnapshotId** is greater than the value of **Size**, snapshot size of the created cloud disk is equal to snapshot size of the snapshot.
   * 
   * - If snapshot size of the snapshot specified by **SnapshotId** is less than the value of **Size**, snapshot size of the created cloud disk is equal to the value of **Size**.
   * 
   * @example
   * s-897654321****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The list of tags. You can add up to 20 tags in a single call.
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

