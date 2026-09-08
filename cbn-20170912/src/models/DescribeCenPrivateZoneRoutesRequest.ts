// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenPrivateZoneRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region from which the PrivateZone service is accessed.
   * 
   * You can call [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region where the PrivateZone service resides.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      hostRegionId: 'HostRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      hostRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

