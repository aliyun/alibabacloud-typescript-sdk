// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinResourceGroupRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, when ResourceType is set to instance, ResourceId can be interpreted as the InstanceId.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the ECS resource. Valid values:
   * 
   * - instance: instance.
   * - disk: block storage.
   * - snapshot: snapshot.
   * - image: image.
   * - securitygroup: security group.
   * - ddh: dedicated host.
   * - ddhcluster: dedicated host cluster.
   * - eni: elastic network interface.
   * - keypair: SSH key pair.
   * - launchtemplate: launch template.
   * - command: Cloud Assistant command.
   * - activation: Cloud Assistant managed instance activation code.
   * - managedinstance: Cloud Assistant managed instance.
   * 
   * The preceding values are case-sensitive.
   * 
   * @example
   * securitygroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

