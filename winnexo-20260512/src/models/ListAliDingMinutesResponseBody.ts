// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliDingMinutesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * John Doe
   */
  creatorName?: string;
  /**
   * @remarks
   * The execution duration of the asynchronous task.
   * 
   * @example
   * 3600000
   */
  durationMs?: number;
  /**
   * @remarks
   * The end timestamp, in milliseconds.
   * 
   * @example
   * 2026-09-08T10:00:00+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The DingTalk meeting minutes ID.
   * 
   * @example
   * 76327569643231383535353939365f3436383537393431335f32
   */
  minutesId?: string;
  /**
   * @remarks
   * The start timestamp, in milliseconds.
   * 
   * @example
   * 2026-09-08T09:00:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Running is returned upon submission.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The title of the scheduled meeting.
   * 
   * @example
   * Weekly Project Meeting
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      durationMs: 'durationMs',
      endTime: 'endTime',
      minutesId: 'minutesId',
      startTime: 'startTime',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      durationMs: 'number',
      endTime: 'string',
      minutesId: 'string',
      startTime: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliDingMinutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The location clusters.
   */
  items?: ListAliDingMinutesResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The token for the next retrieval.
   * 
   * @example
   * opaque-next-cursor
   */
  nextCursor?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListAliDingMinutesResponseBodyItems },
      message: 'string',
      nextCursor: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

