// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachCenChildInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmx****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the CEN instance.
   * 
   * @example
   * 1688000000000000
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the network instance to uninstall.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp18sth14qii3pnvx****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * 1699000000000000
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: virtual private cloud.
   * 
   * - **VBR**: virtual border router.
   * 
   * - **CCN**: Cloud Connect Network.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

