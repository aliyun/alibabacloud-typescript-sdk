// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamMembersResponseBodyMemberInfos extends $dara.Model {
  /**
   * @remarks
   * The time when the member was added.
   * 
   * @example
   * 2025-07-11T07:18:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * - **Folder ID**: The ID of the folder.
   * 
   * - **Account UID**: The UID of the member account in the resource directory.
   * 
   * @example
   * fd-ccccncASqa
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * - **Folder**: The member is a folder.
   * 
   * - **Account**: The member is a member account in the resource directory.
   * 
   * @example
   * Folder
   */
  memberType?: string;
  /**
   * @remarks
   * The status of the member managed by the IPAM trusted service. Valid values:
   * 
   * - **Created**: The member is managed.
   * 
   * - **Deleted**: The member is removed.
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      memberId: 'MemberId',
      memberType: 'MemberType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      memberId: 'string',
      memberType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of entries returned on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A list of members managed by the IPAM trusted service.
   */
  memberInfos?: ListIpamMembersResponseBodyMemberInfos[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If **NextToken** is empty, no more results are available.
   * 
   * - If **NextToken** has a value, the value is the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B90776C8-F703-51D5-893A-AD1CA699D535
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      memberInfos: 'MemberInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      memberInfos: { 'type': 'array', 'itemType': ListIpamMembersResponseBodyMemberInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberInfos)) {
      $dara.Model.validateArray(this.memberInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

