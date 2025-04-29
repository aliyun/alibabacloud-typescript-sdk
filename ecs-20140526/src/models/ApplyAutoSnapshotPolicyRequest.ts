// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAutoSnapshotPolicyRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The IDs of disks. The value is a JSON array that consists of disk IDs. Separate the disk IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["d-bp14k9cxvr5uzy54****", "d-bp1dtj8v7x6u08iw****", "d-bp1c0tyj9tfli2r8****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy and the disks. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      autoSnapshotPolicyId: 'autoSnapshotPolicyId',
      diskIds: 'diskIds',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      autoSnapshotPolicyId: 'string',
      diskIds: 'string',
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

