// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseAccountsForUserGroupRequest extends $dara.Model {
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
   * The instance ID of the database for which you want to query database accounts.
   * > You can invoke the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 36
   */
  databaseId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-pe334a03o0h
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page for paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging in a paged query.  
   * The maximum value of the PageSize parameter is 100. The default number of entries returned on each page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
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
   * The ID of the user group for which you want to query the authorized database accounts.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
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

