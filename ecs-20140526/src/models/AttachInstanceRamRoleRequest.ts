// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceRamRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of ECS instances. You can specify 1 to 100 ECS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * [“i-bp14ss25xca5ex1u****”, “i-bp154z5o1qjalfse****”, “i-bp10ws62o04ubhvi****”…]
   */
  instanceIds?: string;
  ownerId?: number;
  /**
   * @remarks
   * The additional policy. When you attach an instance RAM role to instances, you can specify an additional policy to further limit the permissions of the role. For more information, see [Policy overview](https://help.aliyun.com/document_detail/93732.html). The value of this parameter must be 1 to 1,024 characters in length.
   * 
   * @example
   * {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you created.
   * 
   * This parameter is required.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      policy: 'Policy',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      policy: 'string',
      ramRoleName: 'string',
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

