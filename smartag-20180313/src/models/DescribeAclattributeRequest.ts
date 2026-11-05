// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-ohlexqptfhyaq****
   */
  aclId?: string;
  /**
   * @remarks
   * The direction in which the access control rule is applied. Valid values:
   * 
   * - **in**: inbound, which indicates traffic from external networks to the local branch where the Smart Access Gateway instance is deployed.
   * - **out**: outbound, which indicates traffic from the local branch where the Smart Access Gateway instance is deployed to external networks.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The name of the access control instance.
   * 
   * The name must be 2 to 100 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter or Chinese character.
   * > Fuzzy search is supported for this parameter.
   * 
   * @example
   * doctest
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 1255444444
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number for a paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of access control rule entries to return on each page in a paging query.
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
   * The region ID of the access control instance.
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

