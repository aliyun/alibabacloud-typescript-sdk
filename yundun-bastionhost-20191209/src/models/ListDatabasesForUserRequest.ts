// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserRequest extends $dara.Model {
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
   * MySQL-8.0
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
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-tl32swayw7o
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain for which you want to query the authorized databases.
   * 
   * @example
   * 5
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.  
   * Maximum value: 100. Default value: 20. If this paging parameter is left empty, 20 entries are returned by default.
   * > Specify a value for this parameter.
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
   * The ID of the user whose authorized databases you want to query.
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to obtain the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  userId?: string;
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
      userId: 'UserId',
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
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

