// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachClassicLinkVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the classic network type instance. You can invoke [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) to query your active instances.
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
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The ID of the VPC for which you enable ClassicLink. You can invoke [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) to query your active VPCs.
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

