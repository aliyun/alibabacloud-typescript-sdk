// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCenInterRegionBandwidthLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth value of the inter-region connection. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  bandwidthLimit?: number;
  /**
   * @remarks
   * The bandwidth allocation method. Valid values:
   * 
   * **BandwidthPackage**: allocates bandwidth from a bandwidth plan.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthType?: string;
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
   * The ID of the local region.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query regions where you can attach network instances to a CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  localRegionId?: string;
  /**
   * @remarks
   * The ID of the peer region.
   * 
   * This parameter is required.
   * 
   * @example
   * us-west-1
   */
  oppositeRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      bandwidthType: 'BandwidthType',
      cenId: 'CenId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      bandwidthType: 'string',
      cenId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
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

