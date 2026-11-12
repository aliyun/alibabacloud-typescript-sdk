// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the new endpoint. The prefix must meet the following requirements:
   * * It can contain lowercase letters, digits, and hyphens (-).
   * * It must start with a letter and end with a digit or a letter.
   * * It must be 6 to 30 characters in length.
   * 
   * @example
   * example
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * > You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the endpoint ID.
   * 
   * @example
   * pe-****************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values: 
   * 
   * * **Public**: Internet
   * * **Private**: Private network
   * <props="china">- **Inner**: Classic network
   * 
   * <props="china">Only PolarDB for MySQL clusters support the classic network type.
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
   * > * Only PolarDB for MySQL clusters support this parameter. If this parameter is left empty, the default port number is 3306.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The prefix of the private domain name. The prefix must meet the following requirements:
   * * It can contain lowercase letters, digits, and hyphens (-).
   * * It must start with a letter and end with a digit or a letter.
   * * It must be 6 to 30 characters in length.
   * 
   * > * You can bind a private domain name to each private endpoint of PolarDB. The domain name takes effect only in the specified VPC within the current region. The private domain name is managed by PrivateZone and mapped to the built-in private endpoint of PolarDB through a CNAME record. PrivateZone charges a small fee for this feature. For more information, see [Pricing](https://help.aliyun.com/document_detail/71338.html).
   * > * This parameter is valid only when **NetType** is set to **Private**.
   * 
   * @example
   * aliyundoc
   */
  privateZoneAddressPrefix?: string;
  /**
   * @remarks
   * The zone name of the private domain name.
   * 
   * > This parameter is valid only when **NetType** is set to **Private**.
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

