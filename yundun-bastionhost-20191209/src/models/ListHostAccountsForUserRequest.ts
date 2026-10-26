// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host account. Exact match is supported.
   * 
   * @example
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host for which you want to query the host accounts.
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the user whose host accounts with authorization you want to query belongs.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging in a paged query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If you leave this parameter empty, 20 entries are returned.
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
   * The region ID of the Bastionhost instance where the user whose authorized host accounts you want to query is located.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose authorized and unauthorized host accounts you want to query.
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
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

