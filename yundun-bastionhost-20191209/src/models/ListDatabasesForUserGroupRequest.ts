// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the database that you want to query. Only term query is supported.
   * 
   * @example
   * ``47.101.**.**``
   */
  databaseAddress?: string;
  /**
   * @remarks
   * The name of the database instance that you want to query.
   * 
   * @example
   * test
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database that you want to query. Valid values:
   * 
   * - **MySQL**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
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
   * The page number of the paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.<br> The maximum value of the PageSize parameter is 100. By default, 20 entries are returned on each page. If you leave the PageSize parameter empty, 20 entries are returned.
   * 
   * > We recommend that you do not leave the PageSize parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

