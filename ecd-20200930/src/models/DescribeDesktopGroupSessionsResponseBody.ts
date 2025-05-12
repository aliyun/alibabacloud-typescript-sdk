// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopGroupSessionsResponseBodySessions } from "./DescribeDesktopGroupSessionsResponseBodySessions";


export class DescribeDesktopGroupSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0920845-7359-59FC-9899-B****
   */
  requestId?: string;
  /**
   * @remarks
   * The sessions.
   */
  sessions?: DescribeDesktopGroupSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopGroupSessionsResponseBodySessions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

