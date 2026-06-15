// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAutoSnapshotPolicyRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the auto snapshot policy to cancel.
   * 
   * - If you omit this parameter, the following rules apply:
   * 
   *   - If only one auto snapshot policy is applied to a disk, that policy is canceled.
   * 
   *   - If a disk has more than one auto snapshot policy, the request fails and returns the `OperationDenied.TooManyAutoSnapshotPolicies` error code. In this case, you must specify `autoSnapshotPolicyId` to identify the policy to cancel.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The IDs of the target disks. The value is a JSON array of disk IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["d-bp14k9cxvr5uzy54****", "d-bp1dtj8v7x6u08iw****", "d-bp1c0tyj9tfli2r8****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The region ID of the auto snapshot policy and disks. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
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

