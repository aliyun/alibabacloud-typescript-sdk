// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTerminalSessionsResponseBodySessions } from "./DescribeTerminalSessionsResponseBodySessions";


export class DescribeTerminalSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the sessions.
   */
  sessions?: DescribeTerminalSessionsResponseBodySessions;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sessions: DescribeTerminalSessionsResponseBodySessions,
    };
  }

  validate() {
    if(this.sessions && typeof (this.sessions as any).validate === 'function') {
      (this.sessions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

