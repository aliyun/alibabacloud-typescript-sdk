// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the database after the modification. Valid values:
   * - **Public**: public network address
   * - **Private**: private network address
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the database after the modification.
   * 
   * @example
   * tttttttt
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the database to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database instance after the modification.
   * 
   * @example
   * pgsql
   */
  databaseName?: string;
  /**
   * @remarks
   * The port of the database after the modification.
   * 
   * @example
   * 5433
   */
  databasePort?: string;
  /**
   * @remarks
   * The private network address of the database after the modification. IPv4 addresses and domain name formats are supported.
   * 
   * @example
   * 192.168.XX.XX
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database after the modification. Both IPv4 addresses and domain names are supported.
   * 
   * @example
   * www.example.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the database to be modified belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-72137xe5n01
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the database belongs after the modification.
   * > You can call the [ListNetworkDomains ](https://help.aliyun.com/document_detail/2758827.html) operation to obtain this parameter.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the database to be modified belongs.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the database to be modified.  
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

