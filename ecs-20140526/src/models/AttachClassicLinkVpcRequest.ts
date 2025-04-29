// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachClassicLinkVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that is deployed in the classic network. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) operation to query available instances.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1gtjxuuvwj17zr****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC for which the ClassicLink feature is enabled. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query available VPCs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1j4z1sr8zxu4l8u****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

