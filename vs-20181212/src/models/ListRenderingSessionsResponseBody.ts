// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingSessionsResponseBodySessions } from "./ListRenderingSessionsResponseBodySessions";


export class ListRenderingSessionsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  sessions?: ListRenderingSessionsResponseBodySessions[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': ListRenderingSessionsResponseBodySessions },
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

