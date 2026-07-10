// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * >You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * pfs-xxx
   */
  pfsInstanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pfsInstanceId: 'PfsInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pfsInstanceId: 'string',
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

