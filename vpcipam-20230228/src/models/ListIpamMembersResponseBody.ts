// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamMembersResponseBodyMemberInfos extends $dara.Model {
  /**
   * @example
   * 2025-07-11T07:18:07Z
   */
  creationTime?: string;
  /**
   * @example
   * fd-ccccncASqa
   */
  memberId?: string;
  /**
   * @example
   * Folder
   */
  memberType?: string;
  /**
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
   * @example
   * 6
   */
  count?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  memberInfos?: ListIpamMembersResponseBodyMemberInfos[];
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * B90776C8-F703-51D5-893A-AD1CA699D535
   */
  requestId?: string;
  /**
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

