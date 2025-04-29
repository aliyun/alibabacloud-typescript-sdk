// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSecurityGroupRequestTag } from "./CreateSecurityGroupRequestTag";


export class CreateSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the security group. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the security group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testSecurityGroupName
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The type of the security group. Valid values:
   * 
   * *   normal: basic security group
   * *   enterprise: advanced security group For more information, see [Advanced security groups](https://help.aliyun.com/document_detail/120621.html).
   * 
   * Default value: normal.
   * 
   * @example
   * enterprise
   */
  securityGroupType?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The tags to add to the security group. You can add up to 20 tags.
   */
  tag?: CreateSecurityGroupRequestTag[];
  /**
   * @remarks
   * The ID of the VPC in which you want to create the security group.
   * 
   * > The VpcId parameter is required only if you want to create security groups of the VPC type. In regions that support the classic network, you can create security groups of the classic network type without the need to specify the VpcId parameter.
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupName: 'SecurityGroupName',
      securityGroupType: 'SecurityGroupType',
      serviceManaged: 'ServiceManaged',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupName: 'string',
      securityGroupType: 'string',
      serviceManaged: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateSecurityGroupRequestTag },
      vpcId: 'string',
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

