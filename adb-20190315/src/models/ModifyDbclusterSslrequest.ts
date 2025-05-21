// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The internal or public endpoint for which the server certificate needs to be created or updated.
   * 
   * @example
   * am-d7oualxo05x4o5be872***.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      enableSSL: 'EnableSSL',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterId: 'string',
      enableSSL: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
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

