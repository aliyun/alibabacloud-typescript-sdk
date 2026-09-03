// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The connection state of the user.
   * 
   * @example
   * 1
   */
  connectState?: number;
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-8ttn55ujj8nj8****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of authorized user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The fuzzy query string. All results that contain this character string are returned.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there is no next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organization to which the user belongs.
   * 
   * @example
   * org-d0fua2oyukw8j****
   */
  orgId?: string;
  /**
   * @remarks
   * Specifies whether to query user details.
   * 
   * @example
   * true
   */
  queryUserDetail?: boolean;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectState: 'ConnectState',
      desktopGroupId: 'DesktopGroupId',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      queryUserDetail: 'QueryUserDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectState: 'number',
      desktopGroupId: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      queryUserDetail: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

