// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * @example
   * pro
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the topic. **Key** and **Value** must be specified or left empty at the same time. If both are specified, topics are filtered by the tag. If neither is specified, all topics are queried.
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
   * The type of the cloud disk. Valid values:
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
   * The billing cycle of the instance. Valid values: Hour, Day, Month.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The billing method of the instance. Currently, only **PostPaid** (pay-as-you-go) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the KMS key used by the cloud disk.
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
   * The snapshot used to create the cloud disk.
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

