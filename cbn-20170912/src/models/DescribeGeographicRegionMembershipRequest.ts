// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGeographicRegionMembershipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the area that you want to query. Valid values:
   * 
   * *   **china**: the Chinese mainland
   * *   **asia-pacific**: Asia Pacific
   * *   **europe**: Europe
   * *   **north-america**: North America
   * 
   * This parameter is required.
   * 
   * @example
   * china
   */
  geographicRegionId?: string;
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
   * The number of entries to return per page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      geographicRegionId: 'GeographicRegionId',
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
      geographicRegionId: 'string',
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

