// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersNotForProjectResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 122****3763
   */
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersNotForProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. If a valid value is specified for the MaxResults request parameter, the value of the parameter is returned. Otherwise, the default value is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of member accounts.
   */
  members?: ListMembersNotForProjectResponseBodyMembers[];
  /**
   * @remarks
   * The token for the next request, which is used for paging. Specify this token in the NextToken request parameter for the next paged query. If this field is empty in the response, no more data is available.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      members: 'Members',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      members: { 'type': 'array', 'itemType': ListMembersNotForProjectResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

