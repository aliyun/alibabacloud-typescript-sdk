// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAutoSnapshotPolicyRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that you want to cancel.
   * - Default value: empty. If you use the default value, note the following items:
   *   - If only one automatic snapshot policy is applied to the cloud disk, the automatic snapshot policy is canceled.
   *   - If more than one automatic snapshot policy is applied to the cloud disk, the `OperationDenied.TooManyAutoSnapshotPolicies` error code is returned and the request fails. Specify the `autoSnapshotPolicyId` parameter to specify the ID of the automatic snapshot policy that you want to cancel.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The IDs of the cloud disks. To cancel the automatic snapshot policy for multiple cloud disks, specify the cloud disk IDs in a JSON array in the format of "d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz". Separate multiple cloud disk IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["d-bp14k9cxvr5uzy54****", "d-bp1dtj8v7x6u08iw****", "d-bp1c0tyj9tfli2r8****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy and cloud disks. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

