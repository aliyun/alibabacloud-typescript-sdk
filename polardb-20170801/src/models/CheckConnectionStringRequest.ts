// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the new connection string. The prefix must meet the following requirements:
   * 
   * - It must consist of lowercase letters, digits, and periods (.).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************.pg.polardb.pre.rds.aliyuncs.com:5432
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the details of all clusters in your account, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
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

