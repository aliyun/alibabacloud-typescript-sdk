// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The new connection string prefix. The prefix must meet the following requirements:
   * 
   * - It can contain only lowercase letters, digits, and hyphens (-).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be 6 to 30 characters in length.
   * 
   * @example
   * example
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the connection address.
   * 
   * > You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the ID of a connection address.
   * 
   * @example
   * pe-****************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The network type of the connection address. Valid values:
   * 
   * - **Public**: public network
   * 
   * - **Private**: private network
   * 
   * <props="china">
   * 
   * - **Inner**: classic network
   * 
   * 
   * 
   * <props="china">
   * 
   * Only PolarDB for MySQL clusters support the classic network type.
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
   * The port number. The valid range is 3000 to 5999.
   * 
   * > - This parameter is supported only for PolarDB for MySQL clusters. If you do not specify this parameter, the port defaults to 3306.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The prefix of the private domain name. The prefix must meet the following requirements:
   * 
   * - It can contain only lowercase letters, digits, and hyphens (-).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be 6 to 30 characters in length.
   * 
   * > * You can bind a private domain name to each private endpoint of a PolarDB cluster. This domain name is effective only in the specified VPC within the current region. The private domain name is managed by PrivateZone and is mapped to the built-in private endpoint of the cluster through a CNAME record. This feature incurs a small fee. For more information, see [Pricing](https://help.aliyun.com/document_detail/71338.html).
   * >
   * > * This parameter is valid only when **NetType is set to Private**.
   * 
   * @example
   * aliyundoc
   */
  privateZoneAddressPrefix?: string;
  /**
   * @remarks
   * The private zone name.
   * 
   * > This parameter is valid only when **NetType is set to Private**.
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

