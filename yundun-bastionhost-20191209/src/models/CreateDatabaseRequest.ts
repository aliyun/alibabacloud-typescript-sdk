// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the new database. Valid values:
   * 
   * - Public: a public endpoint
   * 
   * - Private: a private endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The comments on the new database. The comments can be up to 500 characters in length.
   * 
   * @example
   * cpp
   */
  comment?: string;
  /**
   * @remarks
   * The name of the new database instance. This parameter is required if you set Source to **Local**.
   * 
   * @example
   * Test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The port used to connect to the database. This parameter is required if you set Source to **Local**.
   * 
   * @example
   * 5433
   */
  databasePort?: number;
  /**
   * @remarks
   * The private endpoint of the database. You can use an IPv4 address or a domain name.
   * 
   * > This parameter is required if you set ActiveAddressType to Private.
   * 
   * @example
   * 192.168.XX.XX
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public endpoint of the database. You can use an IPv4 address or a domain name.
   * 
   * > This parameter is required if you set ActiveAddressType to Public.
   * 
   * @example
   * www.example.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MySQL**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2g5hu20e
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the new RDS or PolarDB database instance belongs.
   * 
   * @example
   * 1605494xxxx
   */
  instanceMemberId?: number;
  /**
   * @remarks
   * The ID of the network domain for the new database.
   * 
   * > Call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to obtain this parameter.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * This parameter is required if you set Source to PolarDB. This parameter specifies the endpoint type of the PolarDB database. Valid values:
   * 
   * - Cluster: a cluster endpoint
   * 
   * - Primary: a primary endpoint
   * 
   * @example
   * Cluster
   */
  polarDBEndpointType?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For a list of region IDs and their corresponding region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the new database. Valid values:
   * 
   * - Local: a local database instance
   * 
   * - Rds: an RDS database instance
   * 
   * - PolarDB: a PolarDB database instance
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * > This parameter is required if you set **Source** to **Rds** or **PolarDB**.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the database instance.
   * 
   * > This parameter is required if **Source** is set to **Rds** or **PolarDB**.
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

