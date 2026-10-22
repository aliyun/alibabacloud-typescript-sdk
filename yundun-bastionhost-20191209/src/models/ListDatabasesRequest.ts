// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MySQL**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the host group.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to query the value of this parameter.
   * 
   * @example
   * 20
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz28f5tk0o
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the database belongs.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The page number of the current page for paging in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging in a paged query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Do not leave the PageSize parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
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
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the database. Valid values:
   * 
   * - **Local**: local database instance
   * - **Rds**: ApsaraDB RDS instance
   * - **PolarDB**: PolarDB instance
   * 
   * @example
   * Local
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      hostGroupId: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
      regionId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

