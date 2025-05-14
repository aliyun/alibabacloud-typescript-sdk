// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMeetingRoomListResponseBodyResult } from "./QueryMeetingRoomListResponseBodyResult";


export class QueryMeetingRoomListResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 123
   */
  nextToken?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: QueryMeetingRoomListResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryMeetingRoomListResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

