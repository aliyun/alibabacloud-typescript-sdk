// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJoinedGroupsForUserResponseBodyJoinedGroups } from "./ListJoinedGroupsForUserResponseBodyJoinedGroups";


export class ListJoinedGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The groups to which the user is added.
   */
  joinedGroups?: ListJoinedGroupsForUserResponseBodyJoinedGroups[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9BBB45F-7877-5DE9-96A5-20E6CFA48929
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      joinedGroups: 'JoinedGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      joinedGroups: { 'type': 'array', 'itemType': ListJoinedGroupsForUserResponseBodyJoinedGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.joinedGroups)) {
      $dara.Model.validateArray(this.joinedGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

