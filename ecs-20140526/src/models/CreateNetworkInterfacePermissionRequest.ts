// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfacePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID of the Alibaba Cloud partner (certified ISV) or the individual user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the Elastic network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Elastic network interface controller (NIC) permission action. Only InstanceAttach is supported.
   * 
   * InstanceAttach: allows the authorized user to attach your Elastic network interface controller (NIC) to their ECS instance. The ECS instance and the Elastic network interface controller (NIC) must reside in the same active zone.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceAttach
   */
  permission?: string;
  /**
   * @remarks
   * The region of the Elastic network interface controller (NIC) permission. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      permission: 'Permission',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      permission: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

