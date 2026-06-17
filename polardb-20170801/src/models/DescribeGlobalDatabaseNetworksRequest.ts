// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworksRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to find the IDs of all clusters in a region.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Returns only GDNs that support creating a secondary cluster in the specified region.
   * 
   * @example
   * cn-beijing
   */
  filterRegion?: string;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must start with a letter or a Chinese character.
   * 
   * - It can contain letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * 
   * - It must be 2 to 126 characters in length.
   * 
   * @example
   * test
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The GDN ID.
   * 
   * @example
   * gdn-****************
   */
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 30. Valid values:
   * 
   * - 30
   * 
   * - 50
   * 
   * - 100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterRegion: 'FilterRegion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterRegion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

