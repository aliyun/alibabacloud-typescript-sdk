// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the security group.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the security group.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the security group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the security group. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The name of the security group. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. The name can contain characters that are categorized as letter in Unicode, including Chinese characters and English letters, and digits. The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testSecurityGroupName
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The type of the security group. Valid values:
   * 
   * - normal: basic security group.
   * - enterprise: advanced security group. For more information, see [Overview of advanced security groups](https://help.aliyun.com/document_detail/120621.html).
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
   * The tags to bind to the security group. Array length: 0 to 20.
   */
  tag?: CreateSecurityGroupRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the security group belongs.
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

