// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCommonBandwidthPackageIpBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Internet Shared Bandwidth.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-bp13d0m4e2qv8xxxxxxxx
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the EIP that is added to the Internet Shared Bandwidth instance. This parameter applies only to EIPs. For IPv6 addresses, use IpInstanceId.
   * 
   * @example
   * eip-2zewysoansu0sxxxxxxxx
   */
  eipId?: string;
  /**
   * @remarks
   * The ID of the public IP address instance for which you want to cancel the maximum available bandwidth setting in the Internet Shared Bandwidth instance. This parameter and `EipId` are mutually exclusive. We recommend that you use this parameter for new workloads. If IpType is set to **VpcIpv6**, specify the IPv6 instance ID.
   * 
   * @example
   * eip-2zewysoansu0svfbg****
   */
  ipInstanceId?: string;
  /**
   * @remarks
   * The resource type of the public IP address for which you want to cancel the maximum available bandwidth setting in the Internet Shared Bandwidth instance. Valid values:
   * - **EIP**: the public IP address of an EIP.
   * - **VpcIpv6**: the IPv6 address of a VPC.
   * 
   * If you do not specify this parameter, **EIP** is used.
   * 
   * @example
   * EIP
   */
  ipType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
      bandwidthPackageId: 'BandwidthPackageId',
      eipId: 'EipId',
      ipInstanceId: 'IpInstanceId',
      ipType: 'IpType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      eipId: 'string',
      ipInstanceId: 'string',
      ipType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

