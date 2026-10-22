// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the database to query. Only exact match is supported.
   * 
   * @example
   * ``47.101.**.**``
   */
  databaseAddress?: string;
  /**
   * @remarks
   * The name of the database instance to query.
   * 
   * @example
   * test
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database to query. Valid values:
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
   * The instance ID of the Bastionhost.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2ve7h00a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The page number of the page to return in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. Maximum value: 100. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Do not leave this parameter empty.
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
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group for which you want to query authorized databases.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAddress: 'DatabaseAddress',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAddress: 'string',
      databaseName: 'string',
      databaseType: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

