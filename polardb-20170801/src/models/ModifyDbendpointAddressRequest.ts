// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the new endpoint. The prefix must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and hyphens (-).
   * *   It must start with a letter and end with a digit or a letter.
   * *   It must be 6 to 30 characters in length.
   * 
   * @example
   * example
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of the clusters that belong to your Alibaba Cloud account, such as cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * > You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query endpoint IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pe-****************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number. Valid values: 3000 to 5999.
   * 
   * > This parameter is valid only for PolarDB for MySQL clusters. If you leave this parameter empty, the default port 3306 is used.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The prefix of the private domain name. The prefix must meet the following requirements:
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-).
   * *   The prefix must start with a letter and end with a digit or a letter.
   * *   The prefix must be 6 to 30 characters in length.
   * 
   * >- You can bind each internal endpoint of PolarDB to a private domain name. The private domain name takes effect only in the specified virtual private clouds (VPCs) in the current region. Private domain names are managed by using PrivateZone. You can use the CNAME record of PrivateZone to map domain names to PolarDB. You are charged a small fee for this feature. For more information, see [Pricing](https://help.aliyun.com/document_detail/71338.html).
   * >- This parameter takes effect only if you set **NetType** to Private.
   * 
   * @example
   * aliyundoc
   */
  privateZoneAddressPrefix?: string;
  /**
   * @remarks
   * The name of the private zone.
   * 
   * > This parameter takes effect only when **NetType** is set to Private.
   * 
   * @example
   * aliyundoc.com
   */
  privateZoneName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      privateZoneAddressPrefix: 'PrivateZoneAddressPrefix',
      privateZoneName: 'PrivateZoneName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      privateZoneAddressPrefix: 'string',
      privateZoneName: 'string',
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

