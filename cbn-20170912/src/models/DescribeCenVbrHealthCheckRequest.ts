// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenVbrHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-6hpdgj7ni6pz1k****
   */
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The number of entries per page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-bp1kznorjeembsuhl****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR.
   * 
   * @example
   * 1250123456123456
   */
  vbrInstanceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the Virtual Border Router (VBR) is deployed.
   * 
   * For more information, see [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceOwnerId: 'VbrInstanceOwnerId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
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
      vbrInstanceId: 'string',
      vbrInstanceOwnerId: 'number',
      vbrInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

