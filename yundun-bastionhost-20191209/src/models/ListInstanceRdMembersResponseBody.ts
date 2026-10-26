// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRdMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 1197234496852779
   */
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRdMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per request. If a valid MaxResults value is specified in the request parameter, the specified value is returned. Otherwise, the default value is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of member accounts.
   */
  members?: ListInstanceRdMembersResponseBodyMembers[];
  /**
   * @remarks
   * The token for the next request, which is used for paging. Specify this value in the NextToken request parameter for the next paged query. If this field is empty in the response, no more data is available.
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      members: 'Members',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      members: { 'type': 'array', 'itemType': ListInstanceRdMembersResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
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

