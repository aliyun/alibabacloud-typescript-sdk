// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the database to add. Valid values:
   * 
   * *   Public
   * *   Private
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The remarks of the database to add. The remarks can be up to 500 characters in length.
   * 
   * @example
   * cpp
   */
  comment?: string;
  /**
   * @remarks
   * The name of the database to add. This parameter is required if Source is set to **Local**.
   * 
   * @example
   * Oracle
   */
  databaseName?: string;
  /**
   * @remarks
   * The port of the database. This parameter is required if Source is set to **Local**.
   * 
   * @example
   * 5433
   */
  databasePort?: number;
  /**
   * @remarks
   * The internal IP address of the database. Specify an IPv4 address or a domain name.
   * 
   * >  This parameter is required if ActiveAddressType is set to Private.
   * 
   * @example
   * pgm-uf6o******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public IP address of the database. Specify an IPv4 address or a domain name.
   * 
   * >  This parameter is required if ActiveAddressType is set to Public.
   * 
   * @example
   * rm-uf65251k51******
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Oracle**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2g5hu20e
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  instanceMemberId?: number;
  /**
   * @remarks
   * The ID of the network domain to which the database to add belongs.
   * 
   * >  You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The endpoint type of the PolarDB database. This parameter is required if Source is set to PolarDB. Valid values:
   * 
   * *   Cluster
   * *   Primary
   * 
   * @example
   * Cluster
   */
  polarDBEndpointType?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the database to add. Valid values:
   * 
   * *   Local: on-premises database.
   * *   Rds: ApsaraDB RDS instance.
   * *   PolarDB: PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the database to add.
   * 
   * > This parameter is required if **Source** is set to **Rds** or **PolarDB**.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the database to add.
   * 
   * >  This parameter is required if **Source** is set to **Rds** or **PolarDB**.
   * 
   * @example
   * cn-shanghai
   */
  sourceInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      instanceMemberId: 'InstanceMemberId',
      networkDomainId: 'NetworkDomainId',
      polarDBEndpointType: 'PolarDBEndpointType',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      instanceId: 'string',
      instanceMemberId: 'number',
      networkDomainId: 'string',
      polarDBEndpointType: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

