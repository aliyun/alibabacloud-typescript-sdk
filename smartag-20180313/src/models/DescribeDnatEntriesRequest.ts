// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnatEntriesRequest extends $dara.Model {
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
   * The number of entries to return on each page. Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * >  Only SAG customer-premises equipment (CPE) instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-djgd*************
   */
  sagId?: string;
  /**
   * @remarks
   * The type of the DNAT entry. Valid values:
   * 
   * *   **Intranet**: translates the IP address to a specific internal IP address. This is the default value.
   * *   **Internet**: translates the IP address to a specific public IP address.
   * 
   * @example
   * Intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

