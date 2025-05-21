// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-123
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The current public endpoint of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusterNetInfo](https://help.aliyun.com/document_detail/143384.html) operation to query the public endpoint of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb****.ads.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number. Set the value to **3306**.
   * 
   * @example
   * 3306
   */
  port?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'number',
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

