// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the new database. Valid values:
   * 
   * - Public: public address
   * - Private: private network address
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The remarks of the new database. The value can be up to 500 characters in length.
   * 
   * @example
   * cpp
   */
  comment?: string;
  /**
   * @remarks
   * The name of the new database instance. This parameter is required when the database source is **Local**.
   * 
   * @example
   * Test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The port used to access the database. This parameter is required when the database source is **Local**.
   * 
   * @example
   * 5433
   */
  databasePort?: number;
  /**
   * @remarks
   * The private network address. IPv4 addresses and domain name formats are supported.
   * > This parameter is required when ActiveAddressType is set to Private.
   * 
   * @example
   * 192.168.XX.XX
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address. IPv4 addresses and domain name formats are supported.
   * > This parameter is required when ActiveAddressType is set to Public.
   * 
   * @example
   * www.example.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * - **Oracle**
   * - **PostgreSQL**
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
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2g5hu20e
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the new ApsaraDB RDS or PolarDB database instance belongs.
   * 
   * @example
   * 1605494xxxx
   */
  instanceMemberId?: number;
  /**
   * @remarks
   * The ID of the network domain to which the new database belongs.
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to obtain this parameter.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The endpoint type of the PolarDB cluster. This parameter is required when Source is set to PolarDB. Valid values:
   * - Cluster: cluster endpoint
   * - Primary: primary endpoint
   * 
   * @example
   * Cluster
   */
  polarDBEndpointType?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the new database. Valid values:
   * - Local: self-managed database instance
   * - Rds: ApsaraDB RDS instance
   * - PolarDB: PolarDB cluster
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the new database.  
   * > This parameter is required when **Source** is set to **Rds** or **PolarDB**.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the new database instance.
   * > This parameter is required when **Source** is set to **Rds** or **PolarDB**.
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

