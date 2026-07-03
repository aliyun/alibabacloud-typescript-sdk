// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-ohlexqptfhyaq****
   */
  aclId?: string;
  /**
   * @remarks
   * The direction of the access control rule. Valid values:
   * 
   * - **in**: inbound. Refers to traffic from external sources accessing the local branch where the Smart Access Gateway (SAG) instance is deployed.
   * - **out**: outbound. Refers to traffic from the local branch where the SAG instance is deployed accessing external destinations.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The name of the ACL instance.
   * 
   * The name must be 2 to 100 characters in length and must start with an uppercase letter, a lowercase letter, or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * > This parameter supports fuzzy search.
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
   * The page number in a paginated query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of access control rule entries to display per page in a paginated query.
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
   * The region ID of the access control list (ACL) instance.
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

