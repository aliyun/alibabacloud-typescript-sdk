// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * RAM用户的虚拟账号ID。
   * 
   * @example
   * 155780923770
   */
  ownerId?: number;
  /**
   * @remarks
   * 资源主账号的账号名称。
   * 
   * @example
   * ECSforCloud
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * 资源主账号的ID，亦即UID。
   * 
   * @example
   * 155780923770
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy. You can call the [DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html) operation to query the IDs of available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The ID of the region to which the automatic snapshot policy belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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

