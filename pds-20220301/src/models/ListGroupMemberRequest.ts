// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group of which you want to query members.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The member type. If you do not specify this parameter, both types of members are returned. Valid values:
   * 
   * *   user
   * *   group
   * 
   * Note: A group can be a member of only one group. It cannot be a member of multiple groups. A user can be a member of multiple groups.
   * 
   * @example
   * user
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      limit: 'limit',
      marker: 'marker',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      limit: 'number',
      marker: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

