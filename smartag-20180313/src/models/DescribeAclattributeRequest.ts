// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-ohlexqptfhyaq****
   */
  aclId?: string;
  /**
   * @remarks
   * The direction of traffic in which the ACL rule is applied. Valid values:
   * 
   * *   **in**: The ACL rule controls inbound network traffic of the on-premises network that is associated with the Smart Access Gateway (SAG) instance.
   * *   **out**: The ACL rule controls outbound network traffic of the on-premises network that is associated with the SAG instance.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * >  This parameter supports fuzzy match.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 1255444444
   */
  order?: string;
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
   * The number of entries to return on each page.
   * 
   * Valid values: **1** to **50**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the ACL is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      direction: 'Direction',
      name: 'Name',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      direction: 'string',
      name: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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

