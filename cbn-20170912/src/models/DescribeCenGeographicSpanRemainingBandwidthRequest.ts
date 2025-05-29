// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenGeographicSpanRemainingBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the bandwidth plan is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-nh98vzx8gfhlwn****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of one of the connected areas of the bandwidth plan. Valid values:
   * 
   * *   **China**: Chinese mainland
   * *   **North-America**: North America
   * *   **Asia-Pacific**: Asia Pacific
   * *   **Europe**: Europe
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  geographicRegionAId?: string;
  /**
   * @remarks
   * The ID of the other area connected by the bandwidth plan. Valid values:
   * 
   * *   **China**: Chinese mainland
   * *   **North-America**: North America
   * *   **Asia-Pacific**: Asia Pacific
   * *   **Europe**: Europe
   * 
   * This parameter is required.
   * 
   * @example
   * North-America
   */
  geographicRegionBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

