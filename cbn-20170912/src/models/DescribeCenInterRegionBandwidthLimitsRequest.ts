// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenInterRegionBandwidthLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-pfa6ugf3xl0qsd****
   */
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * Call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query information about regions.
   * 
   * @example
   * ccn-cn-shanghai
   */
  trRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trRegionId: 'TrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

