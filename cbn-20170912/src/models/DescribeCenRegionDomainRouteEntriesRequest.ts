// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRegionDomainRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6j****
   */
  cenId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * Call [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  cenRegionId?: string;
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
   * The number of entries to return on each page. The default value is **10**. Valid values: **1** to **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * - **Active** (default): active.
   * 
   * - **Candidate**: backup.
   * 
   * - **Rejected**: rejected.
   * 
   * - **Prohibited**: disabled.
   * 
   * - **All**: all route entries in the current region, regardless of their status.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

