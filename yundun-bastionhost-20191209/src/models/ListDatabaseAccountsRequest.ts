// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account to query. The name can be up to 128 characters in length. Only exact match is supported.
   * 
   * @example
   * test
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The ID of the database instance for which you want to query database accounts.
   * > You can call the [ListDatabases](https://help.aliyun.com/document_detail/2758822.html) operation to query the database instance ID.
   * 
   * @example
   * 3
   */
  databaseId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the Bastionhost instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2za0ro06
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
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
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

