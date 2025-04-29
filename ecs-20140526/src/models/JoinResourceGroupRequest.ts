// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinResourceGroupRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to add the instance.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, if you set ResourceType to instance, set this parameter to the ID of the instance.
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
   * *   instance: instance
   * *   disk: Elastic Block Storage (EBS) device
   * *   snapshot: snapshot
   * *   image: image
   * *   securitygroup: security group
   * *   ddh: dedicated host
   * *   ddhcluster: dedicated host cluster
   * *   eni: ENI
   * *   keypair: SSH key pair
   * *   launchtemplate: launch template
   * *   command: Cloud Assistant command
   * *   activation: activation code for a Cloud Assistant managed instance
   * *   managedinstance: Cloud Assistant managed instance
   * 
   * The values are case-sensitive.
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

