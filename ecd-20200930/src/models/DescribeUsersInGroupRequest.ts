// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the desktop connection for the end user.
   * 
   * Valid values:
   * 
   * - 0: Disconnected.
   * - 1: Connected.
   * 
   * @example
   * 1
   */
  connectState?: number;
  /**
   * @remarks
   * The ID of the cloud computer share.
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
   * The IDs of the authorized users.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The query string for fuzzy match. If you specify this parameter, the system returns all results that contain the string.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Maximum value: 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organization to which the end user belongs.
   * 
   * @example
   * org-d0fua2oyukw8j****
   */
  orgId?: string;
  /**
   * @remarks
   * Specifies whether to query user details.
   * 
   * Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * false
   */
  queryUserDetail?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

