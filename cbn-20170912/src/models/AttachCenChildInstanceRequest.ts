// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCenChildInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the network instance to attach.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp18sth14qii3pnvx****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the network instance belongs.
   * 
   * >This parameter is required if you want to attach a cross-account network instance.
   * 
   * @example
   * 1688000000000000
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region of the network instance.
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
   * - **VBR**: border router.
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

