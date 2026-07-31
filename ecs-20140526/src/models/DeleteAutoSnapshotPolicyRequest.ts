// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoSnapshotPolicyRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy. You can call [DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html) to query available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      autoSnapshotPolicyId: 'string',
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

