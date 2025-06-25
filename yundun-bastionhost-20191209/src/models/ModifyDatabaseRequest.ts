// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The new address type of the database. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The new remarks of the database.
   * 
   * @example
   * tttttttt
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the database to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  databaseId?: string;
  /**
   * @remarks
   * The new name of the database.
   * 
   * @example
   * pgsql
   */
  databaseName?: string;
  /**
   * @remarks
   * The new port of the database.
   * 
   * @example
   * 5433
   */
  databasePort?: string;
  /**
   * @remarks
   * The new internal address of the database. Specify an IPv4 address or a domain name.
   * 
   * @example
   * pc-bp169******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The new public address of the database. Specify an IPv4 address or a domain name.
   * 
   * @example
   * pgm-uf6c******
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The ID of the bastion host that manages the database to modify.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-72137xe5n01
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the new network domain for the database.
   * 
   * >  You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The region ID of the bastion host that manages the database to modify.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for RDS instance or PolarDB cluster to modify.
   * 
   * > This parameter is required if **Source** is set to **Rds** or **PolarDB**.
   * 
   * @example
   * i-wz99nexqd62z3bvuvpz5
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'string',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

